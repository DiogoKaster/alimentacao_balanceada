import React, { useEffect, useState } from 'react'
import styles from './Plate.module.scss'
import { useAppSelector } from '../../redux/hooks'
import Image from 'next/image'
import useConfigureFoods from '../../hooks/useConfigureFoods'

type PlateProps = {
    nOfMissingFood: number,
    elementClass: string
}

function Plate({ nOfMissingFood, elementClass }: PlateProps) {

    const [foodsOnPlate, setFoodsOnPlate] = useState<string[]>([])

    useConfigureFoods()

    const foods = useAppSelector((state) => state.foods)


    useEffect(() => {
        const randomCarb = foods.carbs[Math.floor(Math.random() * foods.carbs.length)]
        const randomProt = foods.prots[Math.floor(Math.random() * foods.prots.length)]

        if (nOfMissingFood === 1)
            setFoodsOnPlate([randomCarb, randomProt])
        else if (nOfMissingFood === 2)
            setFoodsOnPlate([randomCarb])

    }, [foods])

    return (
        <>
            <Image
                id={styles['drag-and-drop-plate-img']}
                className={elementClass} src='/imgs/plate-cropped.svg' alt='Prato'
                width={10}
                height={10}
            />

            {
                foodsOnPlate.map((food, idx) => (
                    <Image
                        id={styles[`plate-food-${idx + 1}`]}
                        src={food} className={styles['plate-foods']}
                        alt='Comida não arrastável'
                        width={1}
                        height={1}
                    />
                ))
            }

        </>
    )
}

export default Plate