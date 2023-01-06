import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import styles from './Frame11.module.scss'
import Image from 'next/image'

function Frame11() {

    const prots = useSelector((state) => state.foods.prots)
    useChangeFrameAfterInterval(4)

    return (
        <div id={styles['frame-11']}>
           <ul>
                <li>Proteínas.</li>
            </ul>

            <div>
                <Image
                    src={prots[4]}
                    alt='Proteína 5'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
                <Image
                    src={prots[5]}
                    alt='Proteína 6'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
            </div>
        </div>
    )
}

export default Frame11