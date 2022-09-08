import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import plateImg from '../../../imgs/plate-cropped.svg'
import './styles.scss'

function Frame15() {

    useChangeFrameAfterInterval(4)
    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

    return (
        <div id='frame-15'>
            <img id='plate-img' src={plateImg} alt='Prato' />

            <img src={require(carbs[1])} alt='Carboidrato' className='icon' />
            <img src={require(prots[1])} alt='Proteína' className='icon' />
            <img src={require(fats[1])} alt='Gordura' className='icon' />
        </div>
    )
}

export default Frame15