import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Answer from '../types/Answer'
import { decreaseAnswer, increaseAnswer } from '../redux/states/answer'
import DraggableFood from '../components/DraggableFood'

interface MappingFoodsOnGame {
    (overlappingObjectBoundingClass: string): JSX.Element[]
}

function useFoodsOnGame(): [MappingFoodsOnGame, Function] {

    const [foodsOnGame, setFoodsOnGame] = useState<string[]>([])

    const foods = useAppSelector((state) => state.foods)

    const answer = useAppSelector((state) => state.answer.answer)
    const initialAnswer = useAppSelector((state) => state.answer.initialAnswer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setUpFoodsState()
    }, [foods])

    function shuffleArray(array: string[]) {
        return array.sort(() => Math.random() - 0.5)
    }

    function setUpFoodsState() {
        const maxAttempts = 10  // Defina um limite de tentativas para evitar loops infinitos
        let attempts = 0
        let selectedFoods = new Set<string>()
    
        while (selectedFoods.size < 3 && attempts < maxAttempts) {
            const shuffledCarbs = shuffleArray([...foods.carbs])  // Cópia do array
            const shuffledProts = shuffleArray([...foods.prots])  // Cópia do array
            const shuffledFats = shuffleArray([...foods.fats])    // Cópia do array
    
            selectedFoods.clear()  // Limpa o conjunto a cada nova tentativa
    
            // Adiciona um alimento de cada tipo ao conjunto
            selectedFoods.add(shuffledCarbs[0])
    
            for (const prot of shuffledProts) {
                if (!selectedFoods.has(prot)) {
                    selectedFoods.add(prot)
                    break
                }
            }
    
            for (const fat of shuffledFats) {
                if (!selectedFoods.has(fat)) {
                    selectedFoods.add(fat)
                    break
                }
            }
    
            attempts++
        }
    
        if (selectedFoods.size === 3) {
            setFoodsOnGame(Array.from(selectedFoods))  // Define o estado com alimentos únicos
        } else {
            console.error("Não foi possível selecionar 3 alimentos únicos após várias tentativas.")
        }
    }
    
    

    function handleOverlapping(isOverlapping: boolean, imgSrc: string,
        resetFoodPosition: Function) {

        type AnswerStateKey = keyof Answer

        function changeAnswer(type: AnswerStateKey) {
            if (isOverlapping) {
                const isAnsCorrect = initialAnswer[type] === 0
                const wasItAlreadyInsidePlate = answer[type] === 1

                if (isAnsCorrect) {
                    if (!wasItAlreadyInsidePlate) dispatch(increaseAnswer(type))
                }
                else
                    resetFoodPosition()
            } else {
                const wasAnsCorrect =
                    answer[type] === 1 && initialAnswer[type] === 0

                if (wasAnsCorrect)
                    dispatch(decreaseAnswer(type))
            }

        }

        const isFoodCarb = foods.carbs.includes(imgSrc)
        if (isFoodCarb) changeAnswer('carbs')

        const isFoodProt = foods.prots.includes(imgSrc)
        if (isFoodProt) changeAnswer('prots')

        const isFoodFat = foods.fats.includes(imgSrc)
        if (isFoodFat) changeAnswer('fats')
    }

    const mapFoodsOnGameToFoods: MappingFoodsOnGame
        = (overlappingObjectBoundingClass) => {

            return foodsOnGame.map((food, idx) => (
                <DraggableFood imgSrc={food} key={idx}
                    overlappingObjectBoundingClass={overlappingObjectBoundingClass}
                    isOverlappingCallback={handleOverlapping}
                    top={`${16 * idx}%`}
                />
            ))
        }

    return [mapFoodsOnGameToFoods, setUpFoodsState]
}

export default useFoodsOnGame
