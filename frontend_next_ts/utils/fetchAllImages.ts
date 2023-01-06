import axios from 'axios'
import Image from '../types/Image'

async function fetchAllImages() {
    const url = `${process.env['REACT_APP_BACKEND_URL']}/image/find-all`

    try {
        const { data: { images } } = await axios.get(url)

        return {
            carbs: images.carbs.map(
                (img: Image) => `${process.env['REACT_APP_BACKEND_URL']}/images/${img.filename}`
            ),
            prots: images.prots.map(
                (img: Image) => `${process.env['REACT_APP_BACKEND_URL']}/images/${img.filename}`
            ),
            fats: images.fats.map(
                (img: Image) => `${process.env['REACT_APP_BACKEND_URL']}/images/${img.filename}`
            ),
        }
    } catch (err) {
        console.log(err)
    }
}

export default fetchAllImages