const cocktails1 = ["a", "b", "c", "d"];
const cocktails2 = ["a", "c", "d", "e"];
const cocktails3 = ["a", "c", "d"];

const finalDrinkArray = cocktails1.filter(item => {
  return cocktails2.includes(item) && cocktails3.includes(item);
});

console.log(finalDrinkArray);