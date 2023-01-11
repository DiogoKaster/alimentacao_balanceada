import Image from 'next/image'
import React, { useEffect } from 'react'
import useAudioInAnimation from '../../../hooks/useAudioInAnimation'
import { useAppSelector } from '../../../redux/hooks'
import styles from './Frame6.module.scss'

function Frame6() {

    const carbs = useAppSelector((state) => state.foods.carbs)
    useAudioInAnimation('audio-6')
    
    useEffect(() => {
        console.log(carbs)
    }, [carbs])

    return (
        <div id={styles['frame-6']}>
            <ul>
                <li>Carboidratos.</li>
            </ul>

            <div>
                <Image
                    src={carbs[0]}
                    alt='Carboidrato 1'
                    width={500}
                    height={500}
                    className={styles['icon']}
                />
                <Image
                    src={carbs[1]}
                    alt='Carboidrato 2'
                    width={500}
                    height={500}
                    className={styles['icon']}
                />
            </div>

        </div>
    )
}

export default Frame6