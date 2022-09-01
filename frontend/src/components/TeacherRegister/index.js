import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { checkIfEmailExists } from '../../api/checkIfEmailExists'
import { checkLoginValidity } from '../../api/checkLoginValidity'
import { registerAccount } from '../../api/registerAccount'
import useForm from '../../hooks/useForm'
import './styles.scss'

function TeacherRegister() {

    const [showLoginErrorAlert, setShowLoginErrorAlert] = useState()

    const navigate = useNavigate()

    const [formJsx, emailValue, passwordValue] = useForm('Voltar', 'Registar',
        handleReturnBtnClick, handleRegisterBtnClick)

    function handleRegisterBtnClick() {
        const doesEmailExists = checkIfEmailExists()
        if (doesEmailExists)
            setShowLoginErrorAlert(true)
        else {
            registerAccount(emailValue, passwordValue)
            navigate('/menu')
        }
    }

    function handleReturnBtnClick() {
        navigate('/login')
    }

    return (
        <article id='teacher-register'>
            <h1>
                Registrar
            </h1>

            {
                showLoginErrorAlert &&
                <Alert variant='danger'>
                    Erro no login: e-mail já existente
                </Alert>
            }

            {formJsx}
        </article>
    )
}

export default TeacherRegister