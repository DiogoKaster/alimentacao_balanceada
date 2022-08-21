import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import './styles.scss'

function Frame11() {

    const prots = useSelector((state) => state.foods.prots)
    useChangeFrameAfterInterval(2)

    return (
        <div id='frame-11'>
           <ul>
                <li>Proteínas.</li>
            </ul>

            <div>
                <img src={prots[4]} alt='Proteína 5' className='icon' />
                <img src={prots[5]} alt='Proteína 6' className='icon' />
            </div>
        </div>
    )
}

export default Frame11