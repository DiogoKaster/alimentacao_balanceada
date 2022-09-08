import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import checkIfEmailExists from '../../api/checkIfEmailExists'
import registerAccount from '../../api/registerAccount'
import useForm from '../../hooks/useForm'
import { login } from '../../redux/game'
import './styles.scss'

function TeacherRegister() {

    const [showLoginErrorAlert, setShowLoginErrorAlert] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formJsx, emailValue, passwordValue] = useForm('Voltar', 'Registar',
        handleReturnBtnClick, handleRegisterBtnClick)

    async function handleRegisterBtnClick() {
        const doesEmailExists = await checkIfEmailExists(emailValue)
        if (doesEmailExists)
            setShowLoginErrorAlert(true)
        else {
            await registerAccount(emailValue, passwordValue)
            dispatch(login(emailValue))
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