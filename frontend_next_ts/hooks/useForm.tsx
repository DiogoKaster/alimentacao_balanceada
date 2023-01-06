import React, { CSSProperties, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const formStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',

    margin: '15vh auto 0 auto',
    height: '28%',
    width: '45%',
}

const buttonContainerStyles: CSSProperties = {

    display: 'flex',
    justifyContent: 'space-between',

}

const buttonStyles: CSSProperties = {
    width: '13vw',
    margin: '0',
}

function useForm(btn1Txt: string, btn2Txt: string, 
    btn1Callback: Function, btn2Callback: Function) {

    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')

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
                        type='password'
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                </InputGroup>
            </div>

            <div id='button-container' style={buttonContainerStyles}>
                <Button variant='light' style={buttonStyles}
                    onClick={() => btn1Callback()}>
                    {btn1Txt}
                </Button>

                <Button variant='success' style={buttonStyles}
                    onClick={() => btn2Callback()}>
                    {btn2Txt}
                </Button>
            </div>
        </div>
    )

    return [formJsx, emailValue, passwordValue]
}

export default useForm