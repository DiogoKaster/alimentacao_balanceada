import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseAnswer, increaseAnswer } from '../../../redux/answer'
import DraggableFood from '../DraggableFood'

function useFoodsOnGame() {

    const [foodsOnGame, setFoodsOnGame] = useState([])

    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

    const answer = useSelector((state) => state.answer.answer)
    const initialAnswer = useSelector((state) => state.answer.initialAnswer)
    const dispatch = useDispatch()

    function setUpFoodsState() {
        setFoodsOnGame([
            carbs[Math.floor(Math.random() * carbs.length)],
            prots[Math.floor(Math.random() * prots.length)],
            fats[Math.floor(Math.random() * fats.length)]
        ])
    }

    function handleOverlapping(isOverlapping, imgSrc, resetFoodPosition) {

        function changeAnswer(type) {
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
                console.log(wasAnsCorrect)
                if (wasAnsCorrect)
                    dispatch(decreaseAnswer(type))
            }

        }

        const isFoodCarb = carbs.includes(imgSrc)
        if (isFoodCarb) changeAnswer('carbs')

        const isFoodProt = prots.includes(imgSrc)
        if (isFoodProt) changeAnswer('prots')

        const isFoodFat = fats.includes(imgSrc)
        if (isFoodFat) changeAnswer('fats')
    }

    const mapFoodsOnGameToFoods = () => foodsOnGame.map((food, idx) => (
        <DraggableFood imgSrc={food} key={idx}
            overlappingObjectBoundingClass='drag-and-drop-plate'
            isOverlappingCallback={handleOverlapping}
            top={`${16 * idx}%`}
        />
    ))

    return [mapFoodsOnGameToFoods, setUpFoodsState]
}

export default useFoodsOnGame