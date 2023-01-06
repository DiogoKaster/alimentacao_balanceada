// Deal with errors like inserting data that already exists (like emails)
// throw exceptions in case of errors
// will talk with the data access layer

const fs = require('fs')
const path = require('path')
const Image = require('./Image')
const ImageRepository = require('./ImageRepository')

class ImageService {
    constructor(dbClient) {
        this.repository = new ImageRepository(dbClient)
    }

    async addOne(image) {
        this.repository.addOne(image)
    }

    async deleteOne(image) {
        if (image.filename === undefined)
            throw new Error('Filename is undefined')

        const querySearchByFilename = await this.repository.findByFilename(image)
        const imageExists = querySearchByFilename.rowCount === 1
        if (!imageExists)
            throw new Error('Filename doesn\'t exist')

        fs.unlinkSync(
            path.join(__dirname, '..', '..', 'uploads', image.filename)
        )
        console.log('321')
        
        await this.repository.deleteByFilename(image)
        console.log('132')

    }


    async findAll() {
        const queryResult = await this.repository.findAll()
        const images = queryResult['rows']
        const imagesMapped = images.map((img) => new Image({
            filename: img['filename'],
            carbs: img['is_it_carbs'],
            prots: img['is_it_prots'],
            fats: img['is_it_fats'],
        }))

        function filterImages(type) {
            const imagesFiltered = imagesMapped.filter((img) => {
                return img[`isIt${type}`]
            })

            return imagesFiltered
        }

        return [filterImages('Carbs'), filterImages('Prots'), filterImages('Fats')]
    }

}

module.exports = ImageService