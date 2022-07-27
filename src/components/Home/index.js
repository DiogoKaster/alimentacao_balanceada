import React, { } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import dseImg from '../../imgs/dse.png'
import lesicImg from '../../imgs/lesic.png'
import { toggleGameMode } from '../../redux/game'
import './styles.scss'

function Home() {

    const dispatch = useDispatch()

    function handleGameModeSwitchChange() {
        dispatch(toggleGameMode())
    } 

    return (
        <div id='home'>
            <header>
                <img src={dseImg} alt='Desenvolvimento de Software Educacional' />
                <h1>Alimentação balanceada</h1>
                <img src={lesicImg} alt='LESIC' />
            </header>

            <main>
                <Form id='game-mode-form'>
                    <Form.Check
                        type='switch'
                        id='game-mode-switch'
                        onChange={handleGameModeSwitchChange}
                    />
                    <label>Professor</label>
                </Form>

                <Link to='/menu'><Button variant='success'>Iniciar</Button></Link>
            </main>
        </div>
    )
}

export default Home