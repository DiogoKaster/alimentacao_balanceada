class ImageRepository {

    constructor(dbClient) {
        this.dbClient = dbClient
    }

    addOne(image) {
        const query =
            `INSERT INTO image
            (filename, is_it_carbs, is_it_prots, is_it_fats)
            VALUES ($1, $2, $3, $4)`

        const values = [image.filename, image.isItCarbs,
        image.isItProts, image.isItFats]

        this.dbClient.query(query, values, (err, res) => {
            console.log(err, res)
        })
    }

    findByFilename(image) {
        const query =
            `SELECT * FROM image WHERE filename = $1`

        const values = [image.filename]

        return this.dbClient.query(query, values)
    }

    findAll() {
        const query =
            'SELECT * FROM image'

        return this.dbClient.query(query)
    }

    deleteByFilename(image) {
        const query =
            `DELETE FROM image WHERE filename = $1`

        const values = [image.filename]

        this.dbClient.query(query, values, (err, res) => {
            console.log(err, res)
        })
    }
}

module.exports = ImageRepository