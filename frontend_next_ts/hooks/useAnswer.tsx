import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { initiateAnswer } from '../redux/states/answer'

function useAnswer(howMuchFoodIsMissing: () => number, 
    setShowFeedback: Dispatch<SetStateAction<boolean>>, increaseRound: Function) {

    const answer = useAppSelector((state) => state.answer.answer)
    const dispatch = useAppDispatch()

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