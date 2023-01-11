import React, { } from 'react'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import styles from './Frame15.module.scss'
import Image from 'next/image'
import { useAppSelector } from '../../../redux/hooks'

function Frame15() {

    useChangeFrameAfterInterval(4)
    const carbs = useAppSelector((state) => state.foods.carbs)
    const prots = useAppSelector((state) => state.foods.prots)
    const fats = useAppSelector((state) => state.foods.fats)

    return (
        <div id={styles['frame-15']}>
            <Image
                id={styles['plate-img']}
                src='/imgs/plate-cropped.svg'
                alt='Prato'
                width={500}
                height={500}
            />

            <Image
                id={styles['icon']}
                src={carbs[1]}
                alt='Carboidrato'
                width={500}
                height={500}
                className={styles.icon}
            />
            <Image
                id={styles['icon']}
                src={prots[1]}
                alt='Proteína'
                width={500}
                height={500}
                className={styles.icon}
            />
            <Image
                id={styles['icon']}
                src={fats[0]}
                alt='Gordura'
                width={500}
                height={500}
                className={styles.icon}
            />
        </div>
    )
}

export default Frame15