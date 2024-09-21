export function getRandomFood(foodArray: string[], options: string[] = []): string {
  let randomFood: string;
  do {
    randomFood = foodArray[Math.floor(Math.random() * foodArray.length)];
  } while (options.includes(randomFood));
  
  return randomFood;
}