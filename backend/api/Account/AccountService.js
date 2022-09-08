// Deal with errors like inserting data that already exists (like emails)
// throw exceptions in case of errors
// will talk with the data access layer

const Account = require('./Account')
const AccountRepository = require('./AccountRepository')

class AccountService {
    constructor(dbClient) {
        this.repository = new AccountRepository(dbClient)
    }

    async addOne(json) {
        const account = new Account(json)

        if (await this.doesAccountExist(account))
            throw new Error('Account already exists')

        this.repository.addOne(account)
    }

    async findOne(account) {
        const querySearchByEmail = await this.repository.findByEmail(account)

        const accountExists = querySearchByEmail.rowCount === 1
        if (!accountExists)
            throw new Error('Account does not already exists')

        const fetchedPassword = querySearchByEmail['rows'][0]['password']
        const doCredentialsMatch = account.password === fetchedPassword

        return doCredentialsMatch
    }

    async doesAccountExist(account) {
        const querySearchByEmail = await this.repository.findByEmail(account)
        const accountExists = querySearchByEmail.rowCount === 1

        return accountExists
    }

}

module.exports = AccountService