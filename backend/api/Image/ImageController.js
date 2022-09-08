const Image = require("./Image")
const ImageService = require("./ImageService")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

class ImageController {
    constructor(router, dbClient) {
        this.router = router

        this.setUpRoutes()
        this.setUpServices(dbClient)
    }

    setUpRoutes() {
        this.router.route('/image')
            .post(upload.single('uploaded_image'), async (req, res) => {
                try {
                    const image = new Image({
                        ...req.body,
                        ...req.file
                    })
                    await this.service.addOne(image)

                    res.redirect('/add-images')

                } catch (err) {
                    res.json({
                        'code': 409,
                        'error': { 'message': err.message }
                    })
                }
            })
            .delete(async (req, res) => {
                try {
                    const image = new Image(req.query)

                    await this.service.deleteOne(image)

                    res.json({
                        'code': 200,

                    })
                } catch (err) {
                    res.json({
                        'code': 400,
                        'error': { 'message': err.message }
                    })
                }
            })

        this.router.get('/image/find-all', async (req, res) => {
            try {
                const [carbFoods, protFoods, fatFoods] =
                    await this.service.findAll()

                res.json({
                    'code': 200,
                    'images': {
                        'carbs': carbFoods,
                        'prots': protFoods,
                        'fats': fatFoods,
                    }
                })
            } catch (err) {
                res.json({
                    'code': 400,
                    'error': { 'message': err.message }
                })
            }
        })
    }

    setUpServices(dbClient) {
        this.service = new ImageService(dbClient)
    }
}

module.exports = ImageController