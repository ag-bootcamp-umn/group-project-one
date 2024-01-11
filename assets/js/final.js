const paramArray = document.location.search.split('&');
const idDrink = paramArray[0].split('=').pop();
const userName = paramArray[1].split('=').pop();

const userNamePlace = document.querySelector('.cocktailName');
const cocktailCard = document.querySelector('.cocktailCard');


// Get 3 inputs: 3 Ingredients

API fetch each separately
Store those in variables: arrays of cocktails
EG:  ingr1 = [ 'x', 'y', 'z']

Compare the 3 arrays to find matches
* cocktails appearing in all 3 arrays

return new array with only those matches
const cocktails1 = ["a", "b", "c", "d"];
const cocktails2 = ["a", "c", "d", "e"];
const cocktails3 = ["a", "c", "d"];

const finalDrinkArray = cocktails1.filter(item => {
  return cocktails2.includes(item) && cocktails3.includes(item);
});

console.log(finalDrinkArray);


// combine cocktailnames.js file

const cocktails1 = ["a", "b", "c", "d"];
const cocktails2 = ["a", "c", "d", "e"];
const cocktails3 = ["a", "c", "d"];

const finalDrinkArray = cocktails1.filter(item => {
  return cocktails2.includes(item) && cocktails3.includes(item);
});

console.log(finalDrinkArray);





// Display them

function displayCocktail(drinkId) {
    const ingURL = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

    fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then( res => {
            return res.json();
        })
        .then( data => {
            const cocktail = data.drinks[0];
            const {strDrink, strDrinkThumb, strInstructions,} = cocktail;

            cocktailCard.innerHTML = `
            <div class="card">
            <img src="${strDrinkThumb}" class="card-img-top" alt="${strDrink}">
            <div class="card-body">
              <h5 class="card-title">${strDrink}</h5>
              <p class="card-text">${strInstructions}</p>
              
            </div>
            <ul class="ingredientsList list-group list-group-flush">
            <li class="list-group-item"><h6>Ingredients:</h6></li>
            </ul>
          </div>`;

          for (let key in cocktail) {
            if(key.includes('Ingredient') && cocktail[key]) {
                $('.ingredientsList').append(`<li class="list-group-item">${cocktail[key]}</li>`)
            }
          }
        })
        return
}

userNamePlace.textContent = `Welcome, ${userName}!`;

displayCocktail(idDrink);