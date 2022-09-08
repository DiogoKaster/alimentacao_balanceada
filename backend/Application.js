const { Client } = require("pg")
const AccountController = require("./api/Account/AccountController")
const ImageController = require("./api/Image/ImageController")

class Application {

    constructor(router) {
        this.router = router

        this.setDatabaseConnection()
        this.setUpControllers()
    }

    setDatabaseConnection() {

        this.dbClient = new Client({
            user: process.env['DB_USER'],
            host: process.env['HOST'],
            database: process.env['DATABASE'],
            password: process.env['PASSWORD'],
            port: process.env['DATABASE_PORT'],
        })


        this.dbClient.connect(function (err) {
            if (err) throw err;
            console.log("Database connected with application backend!");
        });
    }

    setUpControllers() {
        this.accountController = new AccountController(this.router, this.dbClient)
        this.imageController = new ImageController(this.router, this.dbClient)
    }

}

module.exports = Application