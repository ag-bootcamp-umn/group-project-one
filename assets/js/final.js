// LOGIC FOR DISPLAYING THE FINAL PAGE

// Getting the API search parameters
const paramArray = document.location.search.split('&');
const idDrink = paramArray[0].split('=').pop();
const userName = paramArray[1].split('=').pop();

// Query Selectors for DOM elements to manipulate
const userNamePlace = document.querySelector('.cocktailName');
const cocktailCard = document.querySelector('.cocktailCard');

function approval(){
  if ($('#list').text() === 'Tequila') {
    console.log('yes')
    $('.ingredientsList').append(`<img src = "images/approved.png";>`)
  } else {
    console.log('no')
    $('.ingredientsList').append(`<img src = "images/dizzy.png";>`)
  }
}

// To display the results from the selected cocktail
function displayCocktail(drinkId, location) {

  // Displaying the name of the User at the top of the page
  userNamePlace.textContent = `Welcome, ${userName}!`;

    // API fetch based on the ID on the cocktail
    fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then( res => {
            return res.json();
        })
        .then( data => {
          // Extracting the data, destructuring it into the relevant parts
            const cocktail = data.drinks[0];
            const {strDrink, strDrinkThumb, strInstructions,} = cocktail;

            // Creating and adding a new HTML element based on the data extracted above
            location.innerHTML = `
            <div class="card">
            <img src="${strDrinkThumb}" class="card-img-top" alt="${strDrink}">
            <div class="card-body">
              <h5 class="card-title">${strDrink}</h5>
              <p class="card-text">${strInstructions}</p>
              
            </div>
            <div class="cocktail-buttons card-body">
              <button class="save-drink btn btn-success">Save your cocktail</button>
              <button class="see-favs btn btn-success">See favourites</button>
        </div>
            <ul class="ingredientsList list-group list-group-flush">
            <li class="list-group-item"><h6>Ingredients:</h6></li>
            </ul>
          </div>`;

          // Appending <li> elements for ingredients.
          // Using a for-in loop because ingredients lists vary between different cocktails
          for (let key in cocktail) {
            if(key.includes('Ingredient') && cocktail[key]) {
                $('.ingredientsList').append(`<li class="list-group-item">${cocktail[key]}</li>`)
            }
          }
          approval()
          document.querySelector('.cocktail-buttons').addEventListener('click', function(e) {
            if (e.target.matches('.save-drink')) saveDrink();
            if (e.target.matches('.see-favs')) seeFavs();
          });
        })
        return;
}

displayCocktail(idDrink, cocktailCard);

function saveDrink() {
  console.log('Drink Saved!');
}
function seeFavs() {
  console.log('Favs Seen!');
}

function changeImage() {
  var image = document.getElementById("base");
  if ($('#list').text() === 'Tequila') {
    image.src = "images/approved.png";
  } else {
    image.src = "images/dizzy.png";
  }
}

changeImage("base")