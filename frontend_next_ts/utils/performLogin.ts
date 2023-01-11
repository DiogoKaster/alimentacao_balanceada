import axios from 'axios'

async function performLogin(email: string, password: string): Promise<boolean> {
    const url: string = `${process.env['REACT_APP_BACKEND_URL']}/api/auth/sign-in`

    try {
        const { status } = await axios.get(
            url,
            { params: { email, password } }
        )


        const loggedInSuccefuly = status === 201
        return loggedInSuccefuly
    }
    catch (err) {
        console.log(err)
        return false
    }
}

export default performLogin