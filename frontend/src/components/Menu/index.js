import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import game from '../../redux/game'
import appleIcon from './../../imgs/carbs/apple.svg'
import bananaIcon from './../../imgs/carbs/banana.svg'
import cherryIcon from './../../imgs/carbs/cherry.svg'

import './styles.scss'

function Menu() {

    const gameMode = useSelector(state => state.game.gameMode)

    return (
        <article id='menu'>
            <header>
                <img src={cherryIcon} alt='Cherry' className='icon' />
                <h1>Bem-vindo ao jogo</h1>
            </header>

            <main
                style={{ height: gameMode === 'student' ? '42%' : '35%'}}>
                    
                <div id='buttons'>
                    <Link to='/introduction'><button>Introdução</button></Link>
                    {
                        gameMode === 'student' ?
                            <>
                                <Link to='/drag-and-drop'><button>Arraste-e-solte</button></Link>
                                <Link to='/quiz'><button>Quiz</button></Link>
                            </> :
                            <>
                                <Link to='/images'><button>Imagens</button></Link>
                            </>
                    }
                    <Link to='/about'><button>Sobre</button></Link>
                </div>

                <img src={appleIcon} alt='Apple' className='icon' />

            </main>

            <footer>
                <img src={bananaIcon} alt='Banana' className='icon' />
            </footer>
        </article>
    )
}

export default Menu