import axios from 'axios'

async function performSignUp(email: string, password: string): Promise<boolean> {
    const url: string = `${process.env['REACT_APP_BACKEND_URL']}/api/auth/sign-up`

    try {
        const { status } = await axios.post(
            url,
            {
                    email, password
            }
        )
        const signedUpSuccefuly = status === 201
        return signedUpSuccefuly
    }
    catch (err) {
        console.log(err)
        return false
    }
}

export default performSignUp