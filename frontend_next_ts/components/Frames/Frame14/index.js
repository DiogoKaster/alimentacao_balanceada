import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame14.module.scss'
import { useSelector } from 'react-redux'
import Image from 'next/image'

function Frame14() {

    useAudioInAnimation('audio-9')
    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

    return (
        <div id={styles['frame-14']}>
            <Image
                id={styles['plate-img']}
                src='/imgs/plate-cropped.svg'
                alt='Prato'
                width={500}
                height={500}
            />

            <Image
                id={styles['plate-img']}
                src={carbs[0]}
                alt='Carboidrato'
                width={500}
                height={500}
                className={styles.icon}
            />
            <Image
                id={styles['plate-img']}
                src={prots[0]}
                alt='Proteína'
                width={500}
                height={500}
                className={styles.icon}
            />
            <Image
                id={styles['plate-img']}
                src={fats[0]}
                alt='Gordura'
                width={500}
                height={500}
                className={styles.icon}
            />
        </div>
    )
}

export default Frame14