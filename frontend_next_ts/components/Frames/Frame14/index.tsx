import React, { } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import styles from './Frame14.module.scss'
import Image from 'next/image'
import { useAppSelector } from '../../../redux/hooks'

function Frame14() {

    useAudioInAnimation('audio-9')
    const carbs = useAppSelector((state) => state.foods.carbs)
    const prots = useAppSelector((state) => state.foods.prots)
    const fats = useAppSelector((state) => state.foods.fats)

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
                id={styles['icon']}
                src={carbs[0]}
                alt='Carboidrato'
                width={500}
                height={500}
                className={styles.icon}
            />
            <Image
                id={styles['icon']}
                src={prots[0]}
                alt='Proteína'
                width={500}
                height={500}
                className={styles.icon}
            />
            <Image
                id={styles['icon']}
                src={fats[1]}
                alt='Gordura'
                width={500}
                height={500}
                className={styles.icon}
            />
        </div>
    )
}

export default Frame14