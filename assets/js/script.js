
const paramArray = document.location.search.split('&');
const idDrink = paramArray[0].split('=').pop();
const userName = paramArray[1].split('=').pop();

const userNamePlace = document.querySelector('.cocktailName');
const cocktailCard = document.querySelector('.cocktailCard');


// Get 3 inputs: 3 Ingredients

// API fetch each separately
// Store those in variables: arrays of cocktails
// EG:  ingr1 = [ 'x', 'y', 'z']

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

$(document).ready(function () {
    // Listen for the click event on the submit button
    $("#nameForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the name e
        var userName = $("#userName").val();

        // Store the name
        localStorage.setItem("userName", userName);

        // Clear the field
        $("#userName").val("");

        // Optional: Display a success message
        alert("User name saved successfully!");
    });
});



// Wait until the DOM is fully loaded before running the code inside
$(document).ready(function () {
    loadIngredients(); // Call the loadIngredients function once the DOM is ready
  });
  
  function loadIngredients() {
    // Make an AJAX request using jQuery
    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
      type: "GET", // Specifies the request type as 'GET' to retrieve data
      // Function to handle the response when the request is successful
      success: function (response) {
  
        // Sort the drinks array alphabetically based on the ingredient name.
              // The sort method organizes the elements of an array based on the condition defined in the provided function.
              // In this case the sort method is called on the 'response.drinks' array. 
              // This method sorts the elements of an array based on the provided comparison function.
              // The comparison function takes two parameters (a, b) which represent any two elements from the array that are being compared during the sorting process.
        var sortedDrinks = response.drinks.sort(function (a, b) {
          // 'localeCompare' is a string method that compares two strings (here, ingredient names) and returns a number indicating their relative order.
              // If it returns a negative number, a is sorted before b.
              // If it returns a positive number, a is sorted after b.
              // If it returns zero, a and b are considered equal in sort order.
              // This is repeated for all elements in the array, comparing them in pairs, until the entire array is sorted.
          // This is useful for sorting strings alphabetically in a way that respects the local language's rules (like accents, special characters, etc.).
          return a.strIngredient1.localeCompare(b.strIngredient1);
        });
  
        // Iterate over each drink in the response
        sortedDrinks.forEach(function (drink) {
          // Append an option element to each of the select elements (ingredient1, ingredient2, ingredient3)
          $("#ingredient1, #ingredient2, #ingredient3").append(
            $("<option>", {
              value: drink.strIngredient1, // Set the value attribute of the option element to the ingredient name
              text: drink.strIngredient1, // Set the visible text of the option element to the ingredient name
            })
          );
        });
      },
      // if request fails log error
      error: function () {
        console.log("Error fetching ingredients");
      },
    });
  }
  


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
