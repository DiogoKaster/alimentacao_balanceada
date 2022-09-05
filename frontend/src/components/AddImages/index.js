import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { submitImage2Database } from '../../api/submitImage2Database'
import './styles.scss'

function AddImages() {

    const [imageFile, setImageFile] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [carbsCheckboxValue, setCarbsCheckboxValue] = useState(false)
    const [protsCheckboxValue, setProtsCheckboxValue] = useState(false)
    const [fatsCheckboxValue, setFatsCheckboxValue] = useState(false)

    const gameMode = useSelector((state) => state.game.gameMode)
    const login = useSelector((state) => state.game.login)

    const navigate = useNavigate()

    useEffect(() => {
        if (gameMode === 'student' || !login)
            navigate('/menu')
    }, [])

    useEffect(() => {
        if (errorMsg === '')
            return

        setTimeout(() => {
            setErrorMsg('')
        }, 4000)

    }, [errorMsg])


    function handleFileChange(e) {
        const fileName = e.target.files['0'].name
        const fileExtension = fileName.substr(fileName.length - 3)

        if (fileExtension !== 'svg') {
            setErrorMsg('Apenas imagens com extensão .svg são aceitáveis.')
            return
        }

        setImageFile(e.target.files['0'])
        console.log(e.target.files)

    }

    function handleSubmitBtnClick() {
        if (imageFile == null) {
            setErrorMsg('Escolha uma imagem para submeter.')
            return
        }

        submitImage2Database(imageFile, carbsCheckboxValue,
            protsCheckboxValue, fatsCheckboxValue)

        navigate('/images')
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

            <Form id='form'>
                <div id='checkboxes'>

                    <Form.Check
                        inline
                        label='Carboidratos'
                        name='group1'
                        type='checkbox'
                        id={`inline-checkbox-1`}
                        value={carbsCheckboxValue}
                        onClick={() => setCarbsCheckboxValue((state) => !state)}
                    />
                    <Form.Check
                        inline
                        label='Proteínas'
                        name='group1'
                        type='checkbox'
                        id={`inline-checkbox-2`}
                        value={protsCheckboxValue}
                        onClick={() => setProtsCheckboxValue((state) => !state)}
                    />
                    <Form.Check
                        inline
                        label='Gorduras'
                        name='group1'
                        type='checkbox'
                        id={`inline-checkbox-3`}
                        value={fatsCheckboxValue}
                        onClick={() => setFatsCheckboxValue((state) => !state)}
                    />
                </div>

                <div id='buttons'>
                    <input
                        className="form-control-file mb-3"
                        type="file" id="file"
                        accept=".svg"
                        onChange={handleFileChange}
                    />
                    <Button variant='success' onClick={handleSubmitBtnClick}>
                        Enviar
                    </Button>
                </div>
            </Form >
        </div>
    )
}

export default AddImages