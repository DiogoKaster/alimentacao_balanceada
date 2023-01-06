import Image from 'next/image'
import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import styles from './Frame7.module.scss'

function Frame7() {

    const carbs = useSelector((state) => state.foods.carbs)
    useChangeFrameAfterInterval(4)

    return (
        <div id={styles['frame-7']}>
            <ul>
                <li>Carboidratos.</li>
            </ul>

            <div>
                <Image
                    src={carbs[2]}
                    alt='Carboidrato 3'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
                <Image
                    src={carbs[3]}
                    alt='Carboidrato 4'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
            </div>
        </div>
    )
}

export default Frame7