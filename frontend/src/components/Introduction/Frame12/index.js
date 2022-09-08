import React, { } from 'react'
import { useSelector } from 'react-redux'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio8 from './../../../audios/audio-8.wav'
import './styles.scss'

function Frame12() {

    const fats = useSelector((state) => state.foods.fats)
    useAudioInAnimation(audio8)

    return (
        <div id='frame-12'>
           <ul>
                <li>Gorduras.</li>
            </ul>

            <div>
                <img src={require(fats[0])} alt='Gordura 1' className='icon' />
                <img src={require(fats[1])} alt='Gordura 2' className='icon' />
            </div>
        </div>
    )
}

export default Frame12