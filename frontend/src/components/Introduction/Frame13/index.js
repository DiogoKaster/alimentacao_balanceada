import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import './styles.scss'

function Frame13() {

    const fats = useSelector((state) => state.foods.fats)
    useChangeFrameAfterInterval(2)

    return (
        <div id='frame-13'>
           <ul>
                <li>Gorduras.</li>
            </ul>

            <div>
                <img src={fats[2]} alt='Gordura 3' className='icon' />
                <img src={fats[3]} alt='Gordura 4' className='icon' />
            </div>
        </div>
    )
}

export default Frame13