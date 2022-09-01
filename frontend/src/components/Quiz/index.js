import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './styles.scss'

function Quiz() {

    const [round, setRound] = useState(0)
    const [quizOptions, setQuizOptions] = useState([])

    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

    useEffect(() => {
        function includeRandomFoodInQuizOptions(foodArray) {
            const randomFood = foodArray[Math.floor(Math.random() * foodArray.length)]
            setQuizOptions((state) => [...state, randomFood])
        }

        const areFoodArraysNotDefined = carbs.length === 0
        if (areFoodArraysNotDefined)
            return

        setQuizOptions([])

        includeRandomFoodInQuizOptions(carbs)
        includeRandomFoodInQuizOptions(prots)
        includeRandomFoodInQuizOptions(fats)

    }, [carbs, prots, fats])


    const isItProteinRound = () => (round === 0 || round === 1)
    const isItCarbRound = () => (round === 2 || round === 3)
    const isItFatRound = () => (round === 4)

    function handleOptionClick(option) {
        if (isItCarbRound())
            return carbs.includes(option)
        if (isItProteinRound())
            return carbs.includes(option)
        if (isItCarbRound)
            return carbs.includes(option)
    }

    return (
        <article id="quiz">
            <h1>
                Quais desses alimentos contém muitas
                {isItCarbRound() && 'carboidratos'}
                {isItProteinRound() && 'proteínas'}
                {isItFatRound() && 'gorduras'}
                ?
            </h1>

            <div id='quiz-options'>
                {
                    quizOptions.map((option, idx) => (
                        <img src={option}
                            alt={`Opção ${idx + 1}`}
                            className='icon'
                            onClick={() => handleOptionClick(option)} />
                    ))
                }
            </div>

        </article>
    )
}

export default Quiz