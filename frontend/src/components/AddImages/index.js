import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useConfigureFoods from '../../hooks/useConfigureFoods'
import useGo2MenuIfNotLoggedInOrIsStudent from '../../hooks/useGo2MenuIfNotLoggedInOrIsStudent'
import './styles.scss'

function AddImages() {

    const [imageFile, setImageFile] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

    const formRef = useRef()

    useGo2MenuIfNotLoggedInOrIsStudent()

    useConfigureFoods()

    useEffect(() => {
        if (errorMsg === '')
            return

        setTimeout(() => {
            setErrorMsg('')
        }, 4000)

    }, [errorMsg])


    function handleFileChange(e) {
        const fileName = e.target.files['0'].name
        console.log(e.target.files['0'])
        const fileExtension = fileName.substr(fileName.length - 3)

        if (fileExtension !== 'svg') {
            setErrorMsg('Apenas imagens com extensão .svg são aceitáveis.')
            return
        }

        setImageFile(e.target.files['0'])

    }

    function handleSubmitBtnClick(e) {
        if (imageFile == null) {
            setErrorMsg('Escolha uma imagem para submeter.')
            e.preventDefault()
            return
        }

    }

    return (
        <div id='add-images'>
            <h1>Adicionar imagens</h1>

            {
                errorMsg.length !== 0 &&
                <Alert variant='warning' id='error-alert' className='text-center'>
                    {errorMsg}
                </Alert>
            }

            <Form id='form'ref={formRef}
                action={`${process.env['REACT_APP_BACKEND_URL']}/image`}
                method='POST' encType='multipart/form-data'>

                <div id='checkboxes'>
                    <Form.Check
                        inline
                        label='Carboidratos'
                        name='carbs'
                        type='checkbox'
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label='Proteínas'
                        name='prots'
                        type='checkbox'
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label='Gorduras'
                        name='fats'
                        type='checkbox'
                        id={`inline-checkbox-3`}
                    />
                </div>

                <div id='buttons'>
                    <input
                        className='form-control-file mb-3'
                        type='file'
                        id='image'
                        name='uploaded_image'
                        accept='.svg'
                        onChange={handleFileChange}
                    />

                    <input className='btn btn-success' type='submit' 
                    value='Enviar' name='submit' onClick={handleSubmitBtnClick}/>
                </div>
            </Form >
        </div >
    )
}

export default AddImages