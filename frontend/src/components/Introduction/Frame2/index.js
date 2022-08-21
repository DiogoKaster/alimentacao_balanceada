import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio2 from './../../../audios/audio-2.wav'
import './styles.scss'

function Frame2() {

    useAudioInAnimation(audio2)
    
    return (
        <div id='frame-2'>
            <h2>
                O jogo será dividido em duas partes:
            </h2>
        </div>
    )
}

export default Frame2