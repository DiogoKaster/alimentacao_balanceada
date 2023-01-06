import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import styles from './Frame15.module.scss'
import Image from 'next/image'

function Frame15() {

    useChangeFrameAfterInterval(4)
    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

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
                id={styles['plate-img']}
                src={carbs[1]}
                alt='Carboidrato'
                width={500}
                height={500}
                className={styles.icon}
            />
            <Image
                id={styles['plate-img']}
                src={prots[1]}
                alt='Proteína'
                width={500}
                height={500}
                className={styles.icon}
            />
            <Image
                id={styles['plate-img']}
                src={fats[1]}
                alt='Gordura'
                width={500}
                height={500}
                className={styles.icon}
            />
        </div>
    )
}

export default Frame15