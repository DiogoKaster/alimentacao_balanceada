import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { checkLoginValidity } from '../../api/checkLoginValidity'
import useForm from '../../hooks/useForm'
import './styles.scss'

function TeacherLogin() {

    const [showLoginErrorAlert, setShowLoginErrorAlert] = useState()

    const navigate = useNavigate()

    const [formJsx, emailValue, passwordValue] = useForm('Registrar', 'Login',
    handleRegisterBtnClick, handleLoginBtnClick)

    function handleLoginBtnClick() {
        const loggedInSuccessfuly = checkLoginValidity()
        if (loggedInSuccessfuly)
            navigate('/menu')
        else
            setShowLoginErrorAlert(true)
    }

    function handleRegisterBtnClick() {
        navigate('/register')
    }

    return (
        <article id='teacher-login'>
            <h1>
                Login
            </h1>

            {
                showLoginErrorAlert &&
                <Alert variant='danger'>
                    Erro no login: credenciais inválidas
                </Alert>
            }

            {formJsx}
        </article>
    )
}

export default TeacherLogin