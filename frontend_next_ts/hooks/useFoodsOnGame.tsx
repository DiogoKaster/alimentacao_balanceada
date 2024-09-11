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
        const shuffledCarbs = shuffleArray([...foods.carbs])  // Cria uma cópia do array
        const shuffledProts = shuffleArray([...foods.prots])  // Cria uma cópia do array
        const shuffledFats = shuffleArray([...foods.fats])    // Cria uma cópia do array
    
        const selectedFoods = new Set<string>()
    
        // Adiciona o primeiro alimento de carboidrato
        selectedFoods.add(shuffledCarbs[0])
    
        // Seleciona o primeiro alimento de proteínas que ainda não foi adicionado
        for (const prot of shuffledProts) {
            if (!selectedFoods.has(prot)) {
                selectedFoods.add(prot)
                break
            }
        }
    
        // Seleciona o primeiro alimento de gordura que ainda não foi adicionado
        for (const fat of shuffledFats) {
            if (!selectedFoods.has(fat)) {
                selectedFoods.add(fat)
                break
            }
        }
    
        // Garante que selecionamos 3 alimentos diferentes
        if (selectedFoods.size === 3) {
            setFoodsOnGame(Array.from(selectedFoods))  // Atribui uma nova cópia do array
        } else {
            // Tentar novamente se houver duplicatas
            setUpFoodsState()
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
