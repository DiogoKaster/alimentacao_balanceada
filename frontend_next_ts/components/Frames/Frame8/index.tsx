import Image from 'next/image'
import React, { } from 'react'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import { useAppSelector } from '../../../redux/hooks'
import styles from './Frame8.module.scss'

function Frame8() {

    const carbs = useAppSelector((state) => state.foods.carbs)
    useChangeFrameAfterInterval(4)

    return (
        <div id={styles['frame-8']}>
            <ul>
                <li>Carboidratos.</li>
            </ul>

            <div>
                <Image
                    src={carbs[4]}
                    alt='Carboidrato 5'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
                <Image
                    src={carbs[5]}
                    alt='Carboidrato 6'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
            </div>
        </div>
    )
}

export default Frame8