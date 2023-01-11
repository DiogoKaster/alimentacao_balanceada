import React, { } from 'react'
import { useSelector } from 'react-redux'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame12.module.scss'
import Image from 'next/image'
import { useAppSelector } from '../../../redux/hooks'

function Frame12() {

    const fats = useAppSelector((state) => state.foods.fats)
    useAudioInAnimation('audio-8')

    return (
        <div id={styles['frame-12']}>
           <ul>
                <li>Gorduras.</li>
            </ul>

            <div>
                <Image
                    src={fats[0]}
                    alt='Gordura 1'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
                <Image
                    src={fats[1]}
                    alt='Gordura 2'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
            </div>
        </div>
    )
}

export default Frame12