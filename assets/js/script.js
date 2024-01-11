
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
}

userNamePlace.textContent = `Welcome, ${userName}!`;

displayCocktail(idDrink);


let drinkId = 11007;
ingURL = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

$.ajax({
  url: ingURL,
  success: function (response) {
    let drinkArray = response.drinks[0];
    let drinkName = drinkArray.strDrink;
    console.log(drinkName);
    const ingredients = [];
    const recipe = [];
    const drinkPhoto = drinkArray.strDrinkThumb
    console.log(drinkPhoto)
    // get name of drink, ingredients, recipe, and photo

    // create function to get ingredients from drinkArray
    function getIngredients() {
      for (let i = 1; i <= 15; i++) {
        const ingredientKey = `strIngredient${i}`;

        // Check if ingredient key exists and is not null
        if (drinkArray[ingredientKey]) {
          ingredients.push(drinkArray[ingredientKey]);
        }
      }
    }
    // create function to get recipe
    function getRecipe() {
      for (let i = 1; i <= 30; i++) {
        const measureKey = `strMeasure${i}`;

        if (drinkArray[measureKey]) {
          recipe.push(drinkArray[measureKey]);
        }
      }
    }
    getIngredients();
    getRecipe();
    console.log(ingredients, recipe);
  },
});

// {
//   "idDrink": "11007",
//   "strDrink": "Margarita",
//   "strDrinkAlternate": null,
//   "strTags": "IBA,ContemporaryClassic",
//   "strVideo": null,
//   "strCategory": "Ordinary Drink",
//   "strIBA": "Contemporary Classics",
//   "strAlcoholic": "Alcoholic",
//   "strGlass": "Cocktail glass",
//   "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
//   "strInstructionsES": null,
//   "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
//   "strInstructionsFR": null,
//   "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
//   "strInstructionsZH-HANS": null,
//   "strInstructionsZH-HANT": null,
//   "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
//   "strIngredient1": "Tequila",
//   "strIngredient2": "Triple sec",
//   "strIngredient3": "Lime juice",
//   "strIngredient4": "Salt",
//   "strIngredient5": null,
//   "strIngredient6": null,
//   "strIngredient7": null,
//   "strIngredient8": null,
//   "strIngredient9": null,
//   "strIngredient10": null,
//   "strIngredient11": null,
//   "strIngredient12": null,
//   "strIngredient13": null,
//   "strIngredient14": null,
//   "strIngredient15": null,
//   "strMeasure1": "1 1/2 oz ",
//   "strMeasure2": "1/2 oz ",
//   "strMeasure3": "1 oz ",
//   "strMeasure4": null,
//   "strMeasure5": null,
//   "strMeasure6": null,
//   "strMeasure7": null,
//   "strMeasure8": null,
//   "strMeasure9": null,
//   "strMeasure10": null,
//   "strMeasure11": null,
//   "strMeasure12": null,
//   "strMeasure13": null,
//   "strMeasure14": null,
//   "strMeasure15": null,
//   "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
//   "strImageAttribution": "Cocktailmarler",
//   "strCreativeCommonsConfirmed": "Yes",
//   "dateModified": "2015-08-18 14:42:59"
// }
