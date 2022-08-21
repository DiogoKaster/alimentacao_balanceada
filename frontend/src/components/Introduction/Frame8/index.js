import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import './styles.scss'

function Frame8() {

    const carbs = useSelector((state) => state.foods.carbs)
    useChangeFrameAfterInterval(2)

    return (
        <div id='frame-8'>
           <ul>
                <li>Carboidratos.</li>
            </ul>

            <div>
                <img src={carbs[4]} alt='Carboidrato 5' className='icon' />
                <img src={carbs[5]} alt='Carboidrato 6' className='icon' />
            </div>
        </div>
    )
}

export default Frame8