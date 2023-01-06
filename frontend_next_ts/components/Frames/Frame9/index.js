import React, { } from 'react'
import { useSelector } from 'react-redux'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame9.module.scss'
import Image from 'next/image'

function Frame9() {

    const prots = useSelector((state) => state.foods.prots)
    useAudioInAnimation('audio-7')

    return (
        <div id={styles['frame-9']}>
           <ul>
                <li>Proteínas.</li>
            </ul>

            <div>
                <Image
                    src={prots[0]}
                    alt='Proteína 1'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
                <Image
                    src={prots[1]}
                    alt='Proteína 2'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
            </div>
        </div>
    )
}

export default Frame9