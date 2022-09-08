import React, { } from 'react'
import { useSelector } from 'react-redux'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio6 from './../../../audios/audio-6.wav'
import './styles.scss'

function Frame6() {

    const carbs = useSelector((state) => state.foods.carbs)
    useAudioInAnimation(audio6)

    return (
        <div id='frame-6'>
            <ul>
                <li>Carboidratos.</li>
            </ul>

            <div>
                <img src={require(carbs[0])} alt='Carboidrato 1' className='icon' />
                <img src={require(carbs[1])} alt='Carboidrato 2' className='icon' />
            </div>

        </div>
    )
}

export default Frame6