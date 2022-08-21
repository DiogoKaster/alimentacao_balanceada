import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio4 from './../../../audios/audio-4.wav'
import './styles.scss'

function Frame4() {

     useAudioInAnimation(audio4)

    return (
        <div id='frame-4'>
            <h2>
                Alimentação balanceada.
            </h2>
        </div>
    )
}

export default Frame4