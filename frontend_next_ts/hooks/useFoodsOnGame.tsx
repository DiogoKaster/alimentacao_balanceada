import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { MappingFoodsOnGame } from '../types/MappingFoodsOnGame';
import { handleOverlapping } from '../utils/handleOverlapping';
import DraggableFood from '../components/DraggableFood';

function useFoodsOnGame(): [MappingFoodsOnGame, () => void] {
  const [foodsOnGame, setFoodsOnGame] = useState<string[]>([]);
  const { carbs, prots, fats } = useAppSelector((state) => state.foods);
  const { answer, initialAnswer } = useAppSelector((state) => state.answer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    initializeFoodsState();
  }, [carbs, prots, fats]);

  const getRandomFood = (foods: string[]) => foods[Math.floor(Math.random() * foods.length)];

  function initializeFoodsState() {
    setFoodsOnGame([getRandomFood(carbs), getRandomFood(prots), getRandomFood(fats)]);
  }

  const mapFoodsOnGameToFoods: MappingFoodsOnGame = (overlappingClass: string) => {
    const gameState = { foods: { carbs, prots, fats }, answer, initialAnswer, dispatch };

    return foodsOnGame.map((food, idx) => (
      <DraggableFood
        imgSrc={food}
        key={idx}
        overlappingObjectBoundingClass={overlappingClass}
        isOverlappingCallback={(isOverlapping, imgSrc, resetFoodPosition) =>
          handleOverlapping({ isOverlapping, imgSrc, resetFoodPosition, gameState })
        }
        top={`${20 * idx}%`}
      />
    ));
  };

  return [mapFoodsOnGameToFoods, initializeFoodsState];
}

export default useFoodsOnGame;
