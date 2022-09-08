import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initiateAnswer } from '../../../redux/answer'

function useAnswer(howMuchFoodIsMissing, setShowFeedback, increaseRound) {

    const answer = useSelector((state) => state.answer.answer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!answer)
            return

        const gotRightAnswer = (answer.carbs >= 1 &&
            answer.prots >= 1 &&
            answer.fats >= 1)

        if (gotRightAnswer) {
            increaseRound()
            setShowFeedback(gotRightAnswer)
        }

    }, [answer])

    function setUpAnswer() {
        switch (howMuchFoodIsMissing()) {
            case 1:
                dispatch(initiateAnswer({
                    carbs: 1,
                    prots: 1,
                    fats: 0
                }))
                break
            case 2:
                dispatch(initiateAnswer({
                    carbs: 1,
                    prots: 0,
                    fats: 0
                }))
                break
            case 3:
                dispatch(initiateAnswer({
                    carbs: 0,
                    prots: 0,
                    fats: 0
                }))
                break
            default:
        }
    }

    return setUpAnswer
}

export default useAnswer