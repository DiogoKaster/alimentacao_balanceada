const Account = require("./Account")
const AccountService = require("./AccountService")

class AccountController {
    constructor(router, dbClient) {
        this.router = router

        this.setUpRoutes()
        this.setUpServices(dbClient)
    }

    setUpRoutes() {
        this.router.route('/account')
            .get(async (req, res) => {
                try {
                    const account = new Account(req.params)
                    await this.service.findOne(account)
                    
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
            .post(async (req, res) => {
                try {
                    const account = new Account(req.body)
                    await this.service.addOne(account)

                    res.json({
                        'code': 204
                    })
                } catch (err) {
                    res.json({
                        'code': 409,
                        'error': { 'message': err.message }
                    })
                }
            })
    }

    setUpServices(dbClient) {
        this.service = new AccountService(dbClient)
    }
}

module.exports = AccountController