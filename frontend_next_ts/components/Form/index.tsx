import React, { useState } from 'react'
import { InputGroup, Form as FormBootstrap, Button } from 'react-bootstrap'
import styles from './Form.module.scss'
import StateGetterAndSetter from '../../types/StateGetterAndSetter'

export interface ButtonClickCallback {
    (emailState: StateGetterAndSetter, passwordState: StateGetterAndSetter): void
}

interface FormProps {
    btnTexts: [string, string],
    callbacks: [ButtonClickCallback, ButtonClickCallback],
}

function Form({ btnTexts, callbacks }: FormProps) {

    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')

    return (
        <div id={styles['form']}>
            <div>
                <InputGroup className='mb-3'>
                    <InputGroup.Text id='inputGroup-sizing-default'>
                        E-mail
                    </InputGroup.Text>
                    <FormBootstrap.Control
                        aria-label='Default'
                        aria-describedby='inputGroup-sizing-default'
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className='mb-3'>
                    <InputGroup.Text id='inputGroup-sizing-default'>
                        Senha
                    </InputGroup.Text>
                    <FormBootstrap.Control
                        aria-label='Default'
                        aria-describedby='inputGroup-sizing-default'
                        value={passwordValue}
                        type='password'
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                </InputGroup>
            </div>

            <div id={styles['button-container']}>
                <Button variant='light'
                    onClick={() => callbacks[0](
                        { getter: emailValue, setter: setEmailValue },
                        { getter: passwordValue, setter: setPasswordValue }
                    )}>
                    {btnTexts[0]}
                </Button>

                <Button variant='success'
                    onClick={() => callbacks[1](
                        { getter: emailValue, setter: setEmailValue },
                        { getter: passwordValue, setter: setPasswordValue }
                    )}>
                    {btnTexts[1]}
                </Button>
            </div>
        </div>
    )
}

export default Form