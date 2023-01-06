import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame5.module.scss'

function Frame5() {

    useAudioInAnimation('audio-5')

    return (
        <div id={styles['frame-5']}>
            <ul>
                <li>Carboidratos.</li>
                <li>Proteínas.</li>
                <li>Gorduras.</li>
            </ul>
        </div>
    )
}

export default Frame5