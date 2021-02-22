export const addFavoriteMealId = (favoriteMealsIds, mealIdToAdd) => {
  const existingMealId = favoriteMealsIds.find(
    (mealId) => mealId === mealIdToAdd,
  );

  if (existingMealId) return [...favoriteMealsIds];

  return [...favoriteMealsIds, mealIdToAdd];
};
