const axios = require('axios')

async function deleteImageFromDatabase(imageSrc: string) {
    if (!process.env['REACT_APP_BACKEND_URL'])
        return
        
    const addressLength = process.env['REACT_APP_BACKEND_URL'].length + '/images'.length + 1
    const imgFileCorrected = imageSrc.substring(addressLength)
    const url = `${process.env['REACT_APP_BACKEND_URL']}/api/image/${imgFileCorrected}`

    try {
        const res = await axios.delete(
            url,
        )
    } catch (err) {
        console.log(err)
    }
}

export default deleteImageFromDatabase