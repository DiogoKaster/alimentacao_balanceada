import React, { useEffect, useState } from 'react'
import useAnswer from '../../hooks/useAnswer'
import useFoodsOnGame from '../../hooks/useFoodsOnGame'
import { useRouter } from 'next/router'
import usePlayAudio from '../../hooks/usePlayAudio'
import Feedback from '../../components/Feedback'
import Plate from '../../components/Plate'
import styles from './../../styles/DragAndDropPage.module.scss'
import useConfigureFoods from '../../hooks/useConfigureFoods'

function DragAndDropPage() {
  const audioFiles = ['/audios/d&d-1.aac', '/audios/d&d-2.aac', '/audios/d&d-3.aac']
  const [round, setRound] = useState<number>(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const setUpAnswer = useAnswer(howMuchFoodIsMissing, setShowFeedback, increaseRound)
  const plateClassName = 'plate-reference'

  useConfigureFoods()

  const [mapFoodsOnGameToFoods, setUpFoodsState] = useFoodsOnGame()
  const router = useRouter()
  const { playAudio, stopAudio } = usePlayAudio()

  useEffect(() => {
    setUpFoodsState()
    setUpAnswer()
  }, [round])

  useEffect(() => {
    // If feedback is showing, we prevent the round audio from playing
    if (!showFeedback) {
      setUpAudio()
    } else {
      stopAudio() // Stop any round-related audio when feedback is shown
    }
  }, [showFeedback])

  function setUpAudio() {
    const audioIndex = Math.floor(round / 2)
    if (audioFiles[audioIndex]) playAudio(audioFiles[audioIndex]) // Play the round-related audio
  }

  function howMuchFoodIsMissing() {
    if (round <= 1) return 1
    if (round <= 3) return 2
    return 3
  }

  function isDragAndDropOver() {
    return round === 5
  }

  function increaseRound() {
    setRound(prev => prev + 1)
  }

  function handleFeedbackButtonClick() {
    if (isDragAndDropOver()) router.replace('/menu')
    setShowFeedback(false)
  }

  return (
    <>
      {showFeedback ? (
        <Feedback 
          variant={isDragAndDropOver() ? 'end' : 'positive'}
          callback={handleFeedbackButtonClick} 
          numStars={round} 
        />
      ) : (
        <div id={styles['drag-and-drop']}>
          <h1>Arraste-e-solte</h1>
          <div id={styles['balanced-alimentation']}>
            <Plate elementClass={plateClassName} nOfMissingFood={howMuchFoodIsMissing()} />
            {mapFoodsOnGameToFoods(plateClassName)}
          </div>
        </div>
      )}
    </>
  )
}

export default DragAndDropPage
