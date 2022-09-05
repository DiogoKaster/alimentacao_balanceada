import React, { useEffect, useState } from 'react'

function useAnswer(howMuchFoodIsMissing, setShowFeedback, increaseRound) {

    const [answer, setAnswer] = useState()

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
                setAnswer({
                    carbs: 1,
                    prots: 1,
                    fats: 0
                })
                break
            case 2:
                setAnswer({
                    carbs: 1,
                    prots: 0,
                    fats: 0
                })
                break
            case 3:
                setAnswer({
                    carbs: 0,
                    prots: 0,
                    fats: 0
                })
                break
            default:
        }
    }

    function increaseAnswer(type) {
        setAnswer((state) => {
            const newState = { ...state }
            newState[type] = state[type] + 1

            return newState
        })
    }

    function decreaseAnswer(type) {
        setAnswer((state) => {
            const newState = { ...state }
            newState[type] = state[type] + 1

            return newState
        })
    }

    return [setUpAnswer, increaseAnswer, decreaseAnswer]
}

export default useAnswer