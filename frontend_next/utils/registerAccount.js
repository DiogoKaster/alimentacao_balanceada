import axios from 'axios'

async function registerAccount(email, password) {
    const url = `${process.env['REACT_APP_BACKEND_URL']}/account`
   
    await axios.post(url, {
            email, 
            password
        })
}

export default registerAccount