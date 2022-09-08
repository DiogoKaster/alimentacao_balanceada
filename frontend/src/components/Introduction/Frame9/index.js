import React, { } from 'react'
import { useSelector } from 'react-redux'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio7 from './../../../audios/audio-7.wav'
import './styles.scss'

function Frame9() {

    const prots = useSelector((state) => state.foods.prots)
    useAudioInAnimation(audio7)

    return (
        <div id='frame-9'>
           <ul>
                <li>Proteínas.</li>
            </ul>

            <div>
                <img src={require(prots[0])} alt='Proteína 1' className='icon' />
                <img src={require(prots[1])} alt='Proteína 2' className='icon' />
            </div>
        </div>
    )
}

export default Frame9