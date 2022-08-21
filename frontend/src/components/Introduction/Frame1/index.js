import React from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio1 from './../../../audios/audio-1.wav'
import './styles.scss'

function Frame1() {
    
    useAudioInAnimation(audio1)
    
    return (
        <div id='frame-1'>
            <h2>
                Olá ! Bem-vindo !
            </h2>

        </div>
    )
}

export default Frame1