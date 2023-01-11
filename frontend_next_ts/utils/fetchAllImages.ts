import axios from 'axios'
import Image from '../types/Image'

async function fetchAllImages() {
    const url = `${process.env['REACT_APP_BACKEND_URL']}/api/image`

    try {
        const { data } = await axios.get(url)

        const images = data.map((datum: any): Image => ({
            filename: datum['filename'],
            isItCarbs: datum['is_it_carbs'],
            isItProts: datum['is_it_prots'],
            isItFats: datum['is_it_fats'],
            createdAt: datum['created_at'],
        }))

        return {
            carbs: images
            .filter((img: Image) => img.isItCarbs)
            .map((img: Image) => `${process.env['REACT_APP_BACKEND_URL']}/images/${img.filename}`
            ),

            prots: images
            .filter((img: Image) => img.isItProts)
            .map((img: Image) => `${process.env['REACT_APP_BACKEND_URL']}/images/${img.filename}`
            ),

            fats: images
            .filter((img: Image) => img.isItFats)
            .map((img: Image) => `${process.env['REACT_APP_BACKEND_URL']}/images/${img.filename}`
            ),
        }
    } catch (err) {
        console.log(err)
    }
}

export default fetchAllImages