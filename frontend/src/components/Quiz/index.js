import React, { useState } from 'react'
import './styles.scss'

function Quiz() {

    const [round, setRound] = useState(0)
    const [rightAnswer, setRightAnswer] = useState(0)

    const isItProteinRound = () => (round === 0 || round === 1)
    const isItCarbRound = () => (round === 2 || round === 3)
    const isItFatRound = () => (round === 4)

    return (
        <article id="quiz">
            <h1>
                Quais desses alimentos contém muitas
                {isItProteinRound() && 'proteínas'}
                {isItCarbRound() && 'carboidratos'}
                {isItFatRound() && 'gorduras'}
                ? 
            </h1>
        </article>
    )
}

export default Quiz