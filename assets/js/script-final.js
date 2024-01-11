
const paramArray = document.location.search.split('&');
const idDrink = paramArray[0].split('=').pop();
const userName = paramArray[1].split('=').pop();

const userNamePlace = document.querySelector('.cocktailName');
const cocktailCard = document.querySelector('.cocktailCard');

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
    $.ajax({
        url: ingURL,
        success: function (res) {
            const cocktail = res.drinks[0];
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
          
        }
    })
}

userNamePlace.textContent = `Welcome, ${userName}!`;


displayCocktail(idDrink);