import axios from 'axios';
import Image from '../types/Image';

async function saveImageInDatabase(checkboxes: [boolean, boolean, boolean], 
    file: Blob) {

    const formData = new FormData()

    formData.append('is_it_carbs', `${checkboxes[0]}`)
    formData.append('is_it_prots', `${checkboxes[1]}`)
    formData.append('is_it_fats', `${checkboxes[2]}`)

    formData.append('file', file)

    try {
        const response = await axios({
            method: 'post',
            url: `${process.env['REACT_APP_BACKEND_URL']}/api/image`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    } catch (error) {
        console.log(error)
    }
}


export default saveImageInDatabase