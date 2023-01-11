import React, { } from 'react'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import styles from './Frame10.module.scss'
import Image from 'next/image'
import { useAppSelector } from '../../../redux/hooks'

function Frame10() {

    const prots = useAppSelector((state) => state.foods.prots)
    useChangeFrameAfterInterval(4)

    return (
        <div id={styles['frame-10']}>
           <ul>
                <li>Proteínas.</li>
            </ul>

            <div>
                <Image
                    src={prots[2]}
                    alt='Proteína 3'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
                <Image
                    src={prots[3]}
                    alt='Proteína 4'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
            </div>
        </div>
    )
}

export default Frame10