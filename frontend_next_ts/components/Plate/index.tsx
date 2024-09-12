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

    // Função para embaralhar arrays
    function shuffleArray(array: string[]) {
        return array.sort(() => Math.random() - 0.5)
    }

    useEffect(() => {
        if (!foods || !foods.carbs || !foods.prots || !foods.fats) return

        const shuffledCarbs = shuffleArray([...foods.carbs])
        const shuffledProts = shuffleArray([...foods.prots])
        const shuffledFats = shuffleArray([...foods.fats])

        const selectedFoods = new Set<string>()

        if (nOfMissingFood >= 1) {
            selectedFoods.add(shuffledCarbs[0])
        }

        if (nOfMissingFood >= 2) {
            // Seleciona o primeiro alimento de proteínas que ainda não foi adicionado
            for (const prot of shuffledProts) {
                if (!selectedFoods.has(prot)) {
                    selectedFoods.add(prot)
                    break
                }
            }
        }

        if (nOfMissingFood >= 3) {
            // Seleciona o primeiro alimento de gordura que ainda não foi adicionado
            for (const fat of shuffledFats) {
                if (!selectedFoods.has(fat)) {
                    selectedFoods.add(fat)
                    break
                }
            }
        }

        // Atualiza o estado com os alimentos selecionados
        setFoodsOnPlate(Array.from(selectedFoods))

    }, [foods, nOfMissingFood])

    return (
        <>
            <Image
                id={styles['drag-and-drop-plate-img']}
                className={elementClass}
                src='/imgs/plate-cropped.svg' 
                alt='Prato'
                width={10}
                height={10}
            />

            {
                foodsOnPlate.map((food, idx) => (
                    <Image
                        key={idx}
                        id={styles[`plate-food-${idx + 1}`]}
                        src={food}
                        className={styles['plate-foods']}
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
