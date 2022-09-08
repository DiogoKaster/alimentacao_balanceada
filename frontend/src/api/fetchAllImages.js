import axios from 'axios'

async function fetchAllImages() {
    const url = `${process.env['REACT_APP_BACKEND_URL']}/image/find-all`

    try {
        const { data: { images } } = await axios.get(url)

        return {
            carbs: images.carbs.map(img => `upload/${img.filename}`),
            prots: images.prots.map(img => `upload/${img.filename}`),
            fats: images.fats.map(img => `upload/${img.filename}`),
        }
    } catch (err) {
        console.log(err)
    }
}

export default fetchAllImages