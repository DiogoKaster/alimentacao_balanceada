import React, { useEffect, useState } from 'react'
import useAnswer from '../../hooks/useAnswer'
import useFoodsOnGame from '../../hooks/useFoodsOnGame'
import { useRouter } from 'next/router'
import usePlayAudio from '../../hooks/usePlayAudio'
import Feedback from '../../components/Feedback'
import Plate from '../../components/Plate'
import styles from './../../styles/DragAndDropPage.module.scss'

/*
    If it's missing 1 food, the missing food will be a fat
    If it's missing 2 foods, the missing foods will be a fat and a prot

    if (nOfMissingFood === 1)
            setFoodsOnPlate([randomCarb, randomProt])
        else if (nOfMissingFood === 2)
            setFoodsOnPlate([randomCarb])
*/


function DragAndDropPage() {

  const audio1 = './../../audios/d&d-1.wav'
  const audio2 = './../../audios/d&d-2.wav'
  const audio3 = './../../audios/d&d-3.wav'

  const [round, setRound] = useState<number>(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const setUpAnswer =
    useAnswer(howMuchFoodIsMissing, setShowFeedback, increaseRound)

  const plateClassName = 'plate-reference-from-drag-and-drop-page'


  const [mapFoodsOnGameToFoods, setUpFoodsState] = useFoodsOnGame()

  const router = useRouter()


  const setCurAudioBeingPlayed = usePlayAudio()

  useEffect(() => {
    setUpFoodsState()
    setUpAnswer()
  }, [round])

  useEffect(() => {
    if (!showFeedback)
      setUpAudio()
  }, [showFeedback])

  function setUpAudio() {
    if (round === 0)
      setCurAudioBeingPlayed(audio1)
    if (round === 2)
      setCurAudioBeingPlayed(audio2)
    if (round === 4)
      setCurAudioBeingPlayed(audio3)
  }

  function howMuchFoodIsMissing() {
    const isItMissing1Food = (round === 0 || round === 1)
    const isItMissing2Foods = (round === 2 || round === 3)
    const isItMissingAllFoods = (round === 4)

    return (
      isItMissing1Food ? 1 :
        isItMissing2Foods ? 2 :
          3
    )

  }

  function isDragAndDropOver() {
    return round === 5
  }

  function increaseRound() {
    setRound((state) => state + 1)
  }

  function handleFeedbackButtonClick() {

    if (isDragAndDropOver())
      router.replace('/menu')

    setShowFeedback(false)
  }

  return (
    <>
      {
        showFeedback ?
          <Feedback variant={isDragAndDropOver() ? 'end' : 'positive'}
            callback={handleFeedbackButtonClick} />
          :
          <div id={styles['drag-and-drop']}>
            <h1>Arraste-e-solte</h1>

            <div id={styles['balanced-alimentation']}>
              <Plate
                elementClass={plateClassName}
                nOfMissingFood={howMuchFoodIsMissing()} />

              {
                mapFoodsOnGameToFoods(plateClassName)
              }
            </div>
          </div>
      }
    </>
  )
}

export default DragAndDropPage