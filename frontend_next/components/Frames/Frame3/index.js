import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame3.module.scss'

function Frame3() {

    useAudioInAnimation('audio-3')

    return (
        <div id={styles['frame-3']}>
            <ul>
                <li>Um arraste-e-solte.</li>
                <li>Um quiz.</li>
            </ul>

        </div>
    )
}

export default Frame3