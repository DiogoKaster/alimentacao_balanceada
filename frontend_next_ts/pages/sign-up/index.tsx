import React, { useState } from 'react'
import styles from './../../styles/SignUpPage.module.scss'
import { useAppDispatch } from '../../redux/hooks'
import { useRouter } from 'next/router'
import Form, { ButtonClickCallback } from '../../components/Form'
import { Alert } from 'react-bootstrap'
import performSignUp from '../../utils/performSignUp'
import { login } from '../../redux/states/game'

function SignUpPage() {

    const [showLoginErrorAlert, setShowLoginErrorAlert] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleRegisterBtnClick: ButtonClickCallback
        = async (emailState, passwordState) => {

            const signedInSuccessfuly
                = await performSignUp(emailState.getter, passwordState.getter)

            if (signedInSuccessfuly) {
                dispatch(login())
                router.replace('/menu')
            }
            else {
                setShowLoginErrorAlert(true)
            }
        }

    const handleReturnBtnClick: ButtonClickCallback
        = (emailState, passwordState) => {
            router.replace('/login')
        }

    return (
        <article id={styles['sign-up']}>
            <h1>
                Registrar
            </h1>

            {
                showLoginErrorAlert &&
                <Alert variant='danger'>
                    Erro registrando conta
                </Alert>
            }

            <Form btnTexts={['Voltar', 'Registrar']}
                callbacks={[handleReturnBtnClick, handleRegisterBtnClick]}
            />
        </article>
    )
}

export default SignUpPage