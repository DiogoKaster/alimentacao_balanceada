import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useRouter } from 'next/router'
import performLogin from '../../utils/performLogin'
import Form, { ButtonClickCallback } from '../../components/Form'
import { login } from '../../redux/states/game'
import styles from './../../styles/LoginPage.module.scss'

function LoginPage() {

    const [showLoginErrorAlert, setShowLoginErrorAlert] = useState<boolean>(false)
    const router = useRouter()
    const dispatch = useAppDispatch()

    const handleLoginBtnClick: ButtonClickCallback
        = async (emailState, passwordState) => {

            const loggedInSuccessfuly =
                await performLogin(emailState.getter, passwordState.getter)

            if (loggedInSuccessfuly) {
                dispatch(login())
                router.replace('/menu')
            }
            else
                setShowLoginErrorAlert(true)
        }

    const handleRegisterBtnClick: ButtonClickCallback
        = (emailState, passwordState) => {
            router.replace('/sign-up')
        }

    return (
        <article id={styles['login']}>
            <h1>
                Login
            </h1>

            {
                showLoginErrorAlert &&
                <Alert variant='danger'>
                    Erro no login: credenciais inválidas
                </Alert>
            }

            <Form btnTexts={['Registrar', 'Login']}
                callbacks={[handleRegisterBtnClick, handleLoginBtnClick]}
            />
        </article>
    )
}

export default LoginPage