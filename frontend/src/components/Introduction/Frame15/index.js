import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import plateImg from '../../../imgs/plate.svg'
import './styles.scss'

function Frame15() {

    useChangeFrameAfterInterval(2)
    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

    return (
        <div id='frame-15'>
            <div id='balanced-alimentation'>
                <img id='plate-img' src={plateImg} alt='Prato' />
            </div>

            <div>
                <img src={carbs[1]} alt='Carboidrato' className='icon' />
                <img src={prots[1]} alt='Proteína' className='icon' />
                <img src={fats[1]} alt='Gordura' className='icon' />
            </div>
        </div>
    )
}

export default Frame15