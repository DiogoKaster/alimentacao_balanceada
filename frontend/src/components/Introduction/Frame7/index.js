import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import './styles.scss'

function Frame7() {

    const carbs = useSelector((state) => state.foods.carbs)
    useChangeFrameAfterInterval(4)

    return (
        <div id='frame-7'>
            <ul>
                <li>Carboidratos.</li>
            </ul>

            <div>
                <img src={carbs[2]} alt='Carboidrato 3' className='icon' />
                <img src={carbs[3]} alt='Carboidrato 4' className='icon' />
            </div>
        </div>
    )
}

export default Frame7