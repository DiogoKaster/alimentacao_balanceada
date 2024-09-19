import { Dispatch } from 'redux';
import { decreaseAnswer, increaseAnswer } from '../redux/states/answer';
import Answer from '../types/Answer';

type AnswerStateKey = keyof Answer;

function updateAnswer(
  type: AnswerStateKey,
  isOverlapping: boolean,
  answer: Answer,
  initialAnswer: Answer,
  resetFoodPosition: () => void,
  dispatch: Dispatch
) {
  const isAnswerCorrect = initialAnswer[type] === 0;
  const wasAlreadyOnPlate = answer[type] === 1;

  if (isOverlapping) {
    if (isAnswerCorrect && !wasAlreadyOnPlate) {
      dispatch(increaseAnswer(type));
    } else {
      resetFoodPosition();
    }
  } else if (wasAlreadyOnPlate && isAnswerCorrect) {
    dispatch(decreaseAnswer(type));
  }
}

export function handleOverlapping({
  isOverlapping,
  imgSrc,
  resetFoodPosition,
  gameState,
}: {
  isOverlapping: boolean;
  imgSrc: string;
  resetFoodPosition: () => void;
  gameState: {
    foods: { carbs: string[]; prots: string[]; fats: string[] };
    answer: Answer;
    initialAnswer: Answer;
    dispatch: Dispatch;
  };
}) {
  const { foods, answer, initialAnswer, dispatch } = gameState;

  const foodTypeMap = [
    { type: 'carbs', foodGroup: foods.carbs },
    { type: 'prots', foodGroup: foods.prots },
    { type: 'fats', foodGroup: foods.fats },
  ] as const;

  foodTypeMap.forEach(({ type, foodGroup }) => {
    if (foodGroup.includes(imgSrc)) {
      updateAnswer(type, isOverlapping, answer, initialAnswer, resetFoodPosition, dispatch);
    }
  });
}
