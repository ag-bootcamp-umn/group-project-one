
// Get 3 inputs: 3 Ingredients

// API fetch each separately
// Store those in variables: arrays of cocktails
// EG:  cocktails1 = [ 'x', 'y', 'z']

// Compare the 3 arrays to find matches
// * cocktails appearing in all 3 arrays

// return new array with only those matches
const cocktails1 = ["a", "b", "c", "d"];
const cocktails2 = ["a", "c", "d", "e"];
const cocktails3 = ["a", "c", "d"];

const finalDrinkArray = cocktails1.filter(item => {
  return cocktails2.includes(item) && cocktails3.includes(item);
});

console.log(finalDrinkArray);

// Display them