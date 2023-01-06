import axios from 'axios'

async function checkIfEmailExists(email) {
    const url = `${process.env['REACT_APP_BACKEND_URL']}/account`

    try {
        const { data: { code } } = await axios.get(
            url,
            { params: { email } }
        )

        return code === 200
    }
    catch (err) {
        console.log(err)
    }
}

export default checkIfEmailExists