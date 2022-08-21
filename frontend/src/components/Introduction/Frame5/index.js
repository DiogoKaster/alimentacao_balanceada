import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio5 from './../../../audios/audio-5.wav'
import './styles.scss'

function Frame5() {

    useAudioInAnimation(audio5)

    return (
        <div id='frame-5'>
            <ul>
                <li>Carboidratos.</li>
                <li>Proteínas.</li>
                <li>Gorduras.</li>
            </ul>
        </div>
    )
}

export default Frame5