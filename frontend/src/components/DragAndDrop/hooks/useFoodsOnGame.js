import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DraggableFood from '../DraggableFood'

function useFoodsOnGame(increaseAnswer, decreaseAnswer) {

    const [foodsOnGame, setFoodsOnGame] = useState([])

    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)


    function setUpFoodsState() {
        setFoodsOnGame([
            carbs[Math.floor(Math.random() * carbs.length)],
            prots[Math.floor(Math.random() * prots.length)],
            fats[Math.floor(Math.random() * fats.length)]
        ])
    }

    function handleOverlapping(isOverlapping, imgSrc) {

        const isFoodCarb = carbs.includes(imgSrc)
        if (isFoodCarb) {
            if (isOverlapping)
                increaseAnswer('carbs')
            else
                decreaseAnswer('carbs')
        }
        const isFoodProt = prots.includes(imgSrc)
        if (isFoodProt) {
            if (isOverlapping)
                increaseAnswer('prots')
            else
                decreaseAnswer('prots')
        }
        const isFoodFat = fats.includes(imgSrc)
        if (isFoodFat) {
            if (isOverlapping)
                increaseAnswer('fats')
            else
                decreaseAnswer('fats')
        }
    }

    const mapFoodsOnGameToFoods = () => foodsOnGame.map((food) => (
        <DraggableFood imgSrc={food}
            overlappingObjectBoundingClass='drag-and-drop-plate'
            isOverlappingCallback={handleOverlapping}
        />
    ))

    return [mapFoodsOnGameToFoods, setUpFoodsState]
}

export default useFoodsOnGame