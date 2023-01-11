import React from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame1.module.scss'

function Frame1() {
    
    useAudioInAnimation('audio-1')
    
    return (
        <div id={styles['frame-1']}>
            <h2>
                Olá ! Bem-vindo !
            </h2>

        </div>
    )
}

export default Frame1