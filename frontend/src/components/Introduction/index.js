import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useAnimationFrames from '../../hooks/useAnimationFrames'
import bananaIcon from './../../imgs/carbs/banana.svg'
import cherryIcon from './../../imgs/carbs/cherry.svg'
import Narrator from './Narrator'
import './styles.scss'

function Introduction() {

    const animationFrameIdx = useSelector(state => state.animation.animationFrameIdx)
    const [displayNarrator, setDisplayNarrator] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (animationFrameIdx === 13)
            setDisplayNarrator(false)
        else if (animationFrameIdx === 15)
            navigate('../menu')
    }, [animationFrameIdx])

    return (
        <article id='introduction'>
            <header>
                <img src={cherryIcon} alt='Cherry' className='icon' />
                <h1>Introdução</h1>
            </header>

            <main>
               {useAnimationFrames(animationFrameIdx)}
            </main>

            {displayNarrator && <Narrator /> }

            <footer>
                <img src={bananaIcon} alt='Banana' className='icon' />
            </footer>
        </article>
    )
}

export default Introduction