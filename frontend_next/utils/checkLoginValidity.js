import axios from 'axios'

async function checkLoginValidity(email, password) {
    const url = `${process.env['REACT_APP_BACKEND_URL']}/account`

    try {
        const { data } = await axios.get(
            url,
            { params: { email, password } }
        )

        return data.code === 200 && data.login
    }
    catch (err) {
        console.log(err)
    }
}

export default checkLoginValidity