import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame2.module.scss'

function Frame2() {

    useAudioInAnimation('audio-2')
    
    return (
        <div id={styles['frame-2']}>
            <h2>
                O jogo será dividido em duas partes:
            </h2>
        </div>
    )
}

export default Frame2