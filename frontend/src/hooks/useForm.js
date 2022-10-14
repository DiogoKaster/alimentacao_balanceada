import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const formStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',

    margin: '15vh auto 0 auto',
    height: '28%',
    width: '45%',

}

const buttonContainerStyles = {

    display: 'flex',
    justifyContent: 'space-between',

}

const buttonStyles = {
    width: '13vw',
    margin: '0',
}

function useForm(btn1Txt, btn2Txt, btn1Callback, btn2Callback) {

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const formJsx = (
        <div id='form' style={formStyle}>
            <div>
                <InputGroup className='mb-3'>
                    <InputGroup.Text id='inputGroup-sizing-default'>
                        E-mail
                    </InputGroup.Text>
                    <Form.Control
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
                    <Form.Control
                        aria-label='Default'
                        aria-describedby='inputGroup-sizing-default'
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                </InputGroup>
            </div>

            <div id='button-container' style={buttonContainerStyles}>
                <Button variant='light' style={buttonStyles}
                    onClick={btn1Callback}>
                    {btn1Txt}
                </Button>

                <Button variant='success' style={buttonStyles}
                    onClick={btn2Callback}>
                    {btn2Txt}
                </Button>
            </div>
        </div>
    )

    return [formJsx, emailValue, passwordValue]
}

export default useForm