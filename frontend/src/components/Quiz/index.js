import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Feedback from '../Feedback'
import { useNavigate } from 'react-router-dom'
import usePlayAudio from '../../hooks/usePlayAudio'
import './styles.scss'
import round2AudioMap from './round2AudioMap'

function Quiz() {

    const [round, setRound] = useState(0)
    const [quizOptions, setQuizOptions] = useState([])
    const [showFeedback, setShowFeedback] = useState(false)
    const [answeredCorrectly, setAnsweredCorrectly] = useState(true)
    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

    const navigate = useNavigate()

    const setAudioSrc = usePlayAudio()

    useLayoutEffect(() => {
        function getRandomFood(options, foodArray) {
            let randomFood = null
            do {
                randomFood = foodArray[Math.floor(Math.random() * foodArray.length)]

            } while (options.includes(randomFood))

            return randomFood
        }

        const areFoodArraysNotDefined = carbs.length === 0
        if (areFoodArraysNotDefined)
            return

        const carbFood = getRandomFood([], carbs)
        const protFood = getRandomFood([carbFood], prots)
        const fatFood = getRandomFood([carbFood, protFood], fats)

        setQuizOptions([carbFood, protFood, fatFood])

    }, [round, carbs, prots, fats])

    useEffect(() => {
        if (isQuizOver())
            setShowFeedback(true)
    }, [round])


    useEffect(() => {
        const isItNewQuestion = !showFeedback && answeredCorrectly
        if (!isItNewQuestion)
            return

        setAudioSrc(round2AudioMap[round])

    }, [showFeedback])


    const isItProteinRound = () => (round === 0 || round === 1)
    const isItCarbRound = () => (round === 2 || round === 3)
    const isItFatRound = () => (round === 4)
    const isQuizOver = () => (round === 5)

    function handleOptionClick(option) {
        if (isItCarbRound())
            setAnsweredCorrectly(carbs.includes(option))
        if (isItProteinRound())
            setAnsweredCorrectly(prots.includes(option))
        if (isItFatRound())
            setAnsweredCorrectly(fats.includes(option))

        setShowFeedback(true)
    }

    function handleFeedbackBtnClick() {
        if (isQuizOver())
            navigate('/menu')
        else if (answeredCorrectly)
            setRound((state) => state + 1)

        setShowFeedback(false)
    }

    function getFeedbackVariant() {
        if (isQuizOver())
            return 'end'
        else if (answeredCorrectly)
            return 'positive'
        else
            return 'negative'
    }

    return (

        <>
            {
                showFeedback ?
                    <Feedback
                        variant={getFeedbackVariant()}
                        callback={handleFeedbackBtnClick}
                    /> :

                    <article id="quiz">
                        <h1>
                            Quais desses alimentos contém
                            {isItCarbRound() && ' muitos carboidratos'}
                            {isItProteinRound() && ' muitas proteínas'}
                            {isItFatRound() && ' muitas gorduras'}
                            ?
                        </h1>

                        <div id='quiz-options'>
                            {
                                quizOptions.map((option, idx) => (
                                    <img src={option}
                                        alt={`Opção ${idx + 1}`}
                                        className='icon'
                                        key={`quiz-option-${idx + 1}`}
                                        onClick={() => handleOptionClick(option)} />
                                ))
                            }
                        </div>

                    </article>
            }
        </>
    )
}

export default Quiz