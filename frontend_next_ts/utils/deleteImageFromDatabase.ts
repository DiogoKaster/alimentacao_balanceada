import Image from '../types/Image'

const axios = require('axios')

async function deleteImageFromDatabase(img: Image) {
    if (!process.env['REACT_APP_BACKEND_URL'])
        return
        
    const addressLength = process.env['REACT_APP_BACKEND_URL'].length + 1
    const imgFileCorrected = img.filename.substring(addressLength)
    const url = `${process.env['REACT_APP_BACKEND_URL']}/image`

    try {
        const res = await axios.delete(
            url, 
            { params: { filename: imgFileCorrected }}
        )
    } catch (err) {
        console.log(err)
    }
}

export default deleteImageFromDatabase