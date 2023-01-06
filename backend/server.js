const express = require('express')
const cors = require('cors')
const path = require('path')
const Application = require('./Application.js')


require('dotenv').config()

const express_app = express()
const port = process.env['BACKEND_PORT'];

express_app.use(cors())
express_app.use(express.urlencoded({ extended: false }))
express_app.use(express.json())

express_app.use(express.static(path.join(__dirname, 'build')))
express_app.use('/images', express.static(path.join(__dirname, 'uploads')))

express_app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const application = new Application(express_app)

express_app.listen(port, () => console.log(`App listening on port ${port}!`));