import React, { useEffect, useRef, useState } from 'react'
import useGo2MenuIfNotLoggedInOrIsStudent from '../../hooks/useGo2MenuIfNotLoggedInOrIsStudent'
import { Alert, Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import saveImageInDatabase from '../../utils/saveImageInDatabase'
import styles from './../../styles/AddImagesPage.module.scss'

function AddImagesPage() {
    const [imageFile, setImageFile] = useState<File>()
    const [errorMsg, setErrorMsg] = useState<string>('')

    const [checkboxes, setCheckboxes] =
        useState<[boolean, boolean, boolean]>([false, false, false])

    useGo2MenuIfNotLoggedInOrIsStudent()

    const router = useRouter()

    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (errorMsg === '')
            return

        setTimeout(() => {
            setErrorMsg('')
        }, 4000)

    }, [errorMsg])


    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!e.target.files)
            return

        const fileName = e.target.files['0'].name
        const fileExtension = fileName.substring(fileName.length - 3)

        if (fileExtension !== 'svg') {
            setErrorMsg('Apenas imagens com extensão .svg são aceitáveis.')
            return
        }

        setImageFile(e.target.files['0'])

    }

    const handleSubmitEvent: React.FormEventHandler<HTMLFormElement> = async (e) => {
        if (imageFile == null) {
            setErrorMsg('Escolha uma imagem para submeter.')
            e.preventDefault()
            return
        }

        e.preventDefault()

        await saveImageInDatabase(checkboxes, imageFile)

        router.replace('/images')

    }

    return (
        <div id={styles['add-images']}>
            <h1>Adicionar imagens</h1>

            {
                errorMsg.length !== 0 &&
                <Alert variant='warning' id='error-alert' className='text-center'>
                    {errorMsg}
                </Alert>
            }

            <Form id={styles['form']} ref={formRef}
                action={`${process.env['REACT_APP_BACKEND_URL']}/image`}
                method='POST' encType='multipart/form-data'
                onSubmit={handleSubmitEvent}>

                <div id='checkboxes'>
                    <Form.Check
                        inline
                        label='Carboidratos'
                        name='carbs'
                        type='checkbox'
                        id={`inline-checkbox-1`}
                        onClick={() => {
                            setCheckboxes((state) => [
                                !state[0], state[1], state[2]
                            ])
                        }}
                    />
                    <Form.Check
                        inline
                        label='Proteínas'
                        name='prots'
                        type='checkbox'
                        id={`inline-checkbox-2`}
                        onClick={() => {
                            setCheckboxes((state) => [
                                state[0], !state[1], state[2]
                            ])
                        }}
                    />
                    <Form.Check
                        inline
                        label='Gorduras'
                        name='fats'
                        type='checkbox'
                        id={`inline-checkbox-3`}
                        onClick={() => {
                            setCheckboxes((state) => [
                                state[0], state[1], !state[2]
                            ])
                        }}
                    />
                </div>

                <div id={styles['buttons']}>
                    <input
                        className='form-control-file mb-3'
                        type='file'
                        id='image'
                        name='uploaded_image'
                        accept='.svg'
                        onChange={handleFileChange}
                    />

                    <input className='btn btn-success' type='submit'
                        value='Enviar' name='submit' />
                </div>
            </Form >
        </div >
    )
}

export default AddImagesPage