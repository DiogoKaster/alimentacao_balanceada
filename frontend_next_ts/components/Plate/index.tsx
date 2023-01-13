import React, { useEffect, useState } from 'react'
import styles from './Plate.module.scss'
import { useAppSelector } from '../../redux/hooks'
import Image from 'next/image'

type PlateProps = {
    nOfMissingFood: number,
    elementClass: string
}

function Plate({ nOfMissingFood, elementClass }: PlateProps) {

    const [foodsOnPlate, setFoodsOnPlate] = useState<string[]>([])

    const carbs = useAppSelector((state) => state.foods.carbs)
    const prots = useAppSelector((state) => state.foods.prots)

    useEffect(() => {
        const randomCarb = carbs[Math.floor(Math.random() * carbs.length)]
        const randomProt = prots[Math.floor(Math.random() * prots.length)]

        if (nOfMissingFood === 1)
            setFoodsOnPlate([randomCarb, randomProt])
        else if (nOfMissingFood === 2)
            setFoodsOnPlate([randomCarb])

    }, [])

    return (
        <>
            <Image
                id={styles['drag-and-drop-plate-img']}
                className={elementClass} src='/imgs/plate-cropped.svg' alt='Prato'
                width={500}
                height={500}
            />

            {
                foodsOnPlate.map((food, idx) => (
                    <Image
                        id={styles[`plate-food-${idx + 1}`]}
                        src={food} className={styles['plate-foods']}
                        alt='Comida'
                        width={500}
                        height={500}
                    />
                ))
            }

        </>
    )
}

export default Plate