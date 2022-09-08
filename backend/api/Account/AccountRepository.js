class AccountRepository {
    constructor(dbClient) {
        this.dbClient = dbClient
    }

    addOne(account) {
        const query =
            `INSERT INTO account
            (email, password)
            VALUES ($1, $2)`

        const values = [account.email, account.password]

        this.dbClient.query(query, values, (err, res) => {
            console.log(err, res)
        })
    }

    findByEmail(account) {
        const query =
            `SELECT * FROM account WHERE email = $1`

        const values = [account.email]

        return this.dbClient.query(query, values)
    }
}

module.exports = AccountRepository