import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import audio3 from './../../../audios/audio-3.wav'
import './styles.scss'

function Frame3() {

    useAudioInAnimation(audio3)

    return (
        <div id='frame-3'>
            <ul>
                <li>Um arraste-e-solte.</li>
                <li>Um quiz.</li>
            </ul>

        </div>
    )
}

export default Frame3