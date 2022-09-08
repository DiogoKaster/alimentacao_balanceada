import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio9 from './../../../audios/audio-9.wav'
import plateImg from '../../../imgs/plate-cropped.svg'
import './styles.scss'
import { useSelector } from 'react-redux'

function Frame14() {

    useAudioInAnimation(audio9)
    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

    return (
        <div id='frame-14'>
                <img id='plate-img' src={plateImg} alt='Prato' />

                <img src={carbs[0]} alt='Carboidrato' className='icon' />
                <img src={prots[0]} alt='Proteína' className='icon' />
                <img src={fats[0]} alt='Gordura' className='icon' />
        </div>
    )
}

export default Frame14