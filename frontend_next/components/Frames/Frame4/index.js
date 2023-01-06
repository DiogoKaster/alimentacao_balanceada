import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame4.module.scss'

function Frame4() {

     useAudioInAnimation('audio-4')

    return (
        <div id={styles['frame-4']}>
            <h2>
                Alimentação balanceada.
            </h2>
        </div>
    )
}

export default Frame4