import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { resetGameMode, toggleGameMode } from '../../redux/game'
import styles from './App.module.scss'

function App() {

    const gameMode = useSelector((state) => state.game.gameMode)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetGameMode())
    }, [])

    function handleGameModeSwitchChange() {
        dispatch(toggleGameMode())
    }

    return (
        <article id={styles.home}>
            <header>
                <Image
                    src="/imgs/dse.png"
                    alt='Desenvolvimento de Software Educacional'
                    width={500}
                    height={500}
                />
                <h1>Alimentação balanceada</h1>
                <Image
                    src="/imgs/lesic.png"
                    alt='LESIC'
                    width={500}
                    height={500}
                />
            </header>

            <main>
                <Form id={styles['game-mode-form']}>
                    <Form.Check
                        type='switch'
                        id={styles['game-mode-switch']}
                        onChange={handleGameModeSwitchChange}
                    />
                    <label>Professor</label>
                </Form>

                <Link href={gameMode === 'student' ? '/menu' : '/login'}>
                    <Button variant='success'>Iniciar</Button>
                </Link>
            </main>
        </article >
    )
}

export default App