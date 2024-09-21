import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useRouter } from 'next/router';
import styles from './../../styles/QuizPage.module.scss';
import usePlayAudio from '../../hooks/usePlayAudio';
import round2AudioMap from '../../utils/round2AudioMap';
import Feedback from '../../components/Feedback';
import Image from 'next/image';
import useConfigureFoods from '../../hooks/useConfigureFoods';
import { getRandomFood } from '../../utils/getRandomFood'; 

function QuizPage() {
  const [round, setRound] = useState<number>(0);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean>(true);
  const carbs = useAppSelector((state) => state.foods.carbs);
  const prots = useAppSelector((state) => state.foods.prots);
  const fats = useAppSelector((state) => state.foods.fats);

  const router = useRouter();

  const { playAudio, stopAudio } = usePlayAudio();

  useConfigureFoods();

  useEffect(() => {
    const areFoodArraysNotDefined = carbs.length === 0;
    if (areFoodArraysNotDefined) return;

    const carbFood = getRandomFood(carbs);
    const protFood = getRandomFood(prots, [carbFood]);
    const fatFood = getRandomFood(fats, [carbFood, protFood]);

    setQuizOptions([carbFood, protFood, fatFood]);
  }, [round, carbs, prots, fats]);

  useEffect(() => {
    if (isQuizOver()) setShowFeedback(true);
  }, [round]);

  useEffect(() => {
    const isItNewQuestion = !showFeedback && answeredCorrectly;
    if (!isItNewQuestion) return;

    playAudio(round2AudioMap[round]);
  }, [showFeedback, answeredCorrectly]);

  const isItProteinRound = () => round === 0 || round === 1;
  const isItCarbRound = () => round === 2 || round === 3;
  const isItFatRound = () => round === 4;
  const isQuizOver = () => round === 5;

  function handleOptionClick(option: string) {
    if (isItCarbRound()) setAnsweredCorrectly(carbs.includes(option));
    if (isItProteinRound()) setAnsweredCorrectly(prots.includes(option));
    if (isItFatRound()) setAnsweredCorrectly(fats.includes(option));

    stopAudio();
    setShowFeedback(true);
  }

  function handleFeedbackBtnClick() {
    if (isQuizOver()) {
      router.replace('/menu');
    } else if (answeredCorrectly) {
      setRound((state) => state + 1);
    }

    setShowFeedback(false);
  }

  function getFeedbackVariant() {
    if (isQuizOver()) return 'end';
    else if (answeredCorrectly) return 'positive';
    else return 'negative';
  }

  return (
    <>
      {showFeedback ? (
        <Feedback
          variant={getFeedbackVariant()}
          callback={handleFeedbackBtnClick}
          numStars={round + 1}
        />
      ) : (
        <article id={styles['quiz']}>
          <h1>
            Quais desses alimentos contém
            {isItCarbRound() && ' muitos carboidratos'}
            {isItProteinRound() && ' muitas proteínas'}
            {isItFatRound() && ' muitas gorduras'}?
          </h1>

          <div id={styles['quiz-options']}>
            {quizOptions.map((option, idx) => (
              <Image
                src={option}
                alt={`Opção ${idx + 1}`}
                className={styles['icon']}
                width={1}
                height={1}
                key={`quiz-option-${idx + 1}`}
                onClick={() => handleOptionClick(option)}
              />
            ))}
          </div>
        </article>
      )}
    </>
  );
}

export default QuizPage;
