import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Feedback from '../Feedback'
import { useNavigate } from 'react-router-dom'
import proteinsAudio from './../../audios/quiz-proteinas.wav'
import carbsAudio from './../../audios/quiz-carboidratos.wav'
import fatsAudio from './../../audios/quiz-gorduras.wav'
import usePlayAudio from '../../hooks/usePlayAudio'
import './styles.scss'

function Quiz() {

    const [round, setRound] = useState(0)
    const [quizOptions, setQuizOptions] = useState([])
    const [showFeedback, setShowFeedback] = useState(false)
    const [answeredCorrectly, setAnsweredCorrectly] = useState()
    const [curAudioBeingPlayed, setCurAudioBeingPlayed] = useState(proteinsAudio)
    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)
    const fats = useSelector((state) => state.foods.fats)

    const navigate = useNavigate()

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

    }, [round, carbs, prots, fats])

    useEffect(() => {
        if (isQuizOver())
            setShowFeedback(true)
    }, [round])

    useEffect(() => {
        if (isItProteinRound())
            setCurAudioBeingPlayed(proteinsAudio)
        else if (isItCarbRound())
            setCurAudioBeingPlayed(carbsAudio)
        else if (isItFatRound())
            setCurAudioBeingPlayed(fatsAudio)
    }, [round])

    usePlayAudio(curAudioBeingPlayed)

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