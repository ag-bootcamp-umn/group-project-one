// LOGIC FOR DISPLAYING THE FINAL PAGE

// Getting the API search parameters
const projectCocktail = JSON.parse(localStorage.getItem('projectCocktail'));
const newFunc = projectCocktail.clearTemp;
const {userName, cocktail} = projectCocktail.thisSession;


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
            const cocktailData = data.drinks[0];
            console.log(data);

            ({strDrink: cocktail.strDrink, strDrinkThumb: cocktail.strDrinkThumb, strInstructions: cocktail.strInstructions,} = cocktailData);

            // Creating and adding a new HTML element based on the data extracted above
            location.innerHTML = `
            <div class="card">
            <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="${cocktail.strDrink}">
            <div class="card-body">
              <h5 class="card-title">${cocktail.strDrink}</h5>
              <p class="card-text">${cocktail.strInstructions}</p>
              
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
          for (let key in cocktailData) {
            if(key.includes('Ingredient') && cocktailData[key]) {
                $('.ingredientsList').append(`<li id ='list' class="list-group-item">${cocktailData[key]}</li>`)
            }
          }
          approval()
          document.querySelector('.cocktail-buttons').addEventListener('click', function(e) {
            if (e.target.matches('.save-drink')) saveDrink();
            if (e.target.matches('.see-favs')) displayFavDrinks();
          });
        })
        return;
}

displayCocktail(cocktail.idDrink, cocktailCard);

function saveDrink() {
  console.log('Drink Saved!');
  projectCocktail.favorites.push(projectCocktail.thisSession);
  localStorage.setItem('projectCocktail', JSON.stringify(projectCocktail));
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

// pull the drinkID


// display  userName, drinkID, drinkImage, drinkLink  by pulling them from an array of objects called "favorites" that will be in local storage
function displayFavDrinks() {
  const projectCocktail = JSON.parse(localStorage.getItem('projectCocktail'));
  const {favorites} = projectCocktail;
  console.log(favorites)


  
  // Check if there are stored favorites
  if (favorites.length === 0) {
      document.getElementById('favoritesContainer').textContent = 'There are no stored favorites';
      return;
  }

  // Create and append elements for each stored favorite
  var favoritesContainer = document.getElementById('favoritesContainer');
  favoritesContainer.innerHTML = '';
  for (var i = 0; i < favorites.length; i++) {
      var favoriteDiv = document.createElement('div');
      favoriteDiv.classList.add('favorite');

      var userNameP = document.createElement('p');
      userNameP.textContent = 'User Name: ' + favorites[i].userName;

      // var drinkIDP = document.createElement('p');
      // drinkIDP.textContent = 'Drink ID: ' + favorites[i].idDrink;

      var drinkImage = document.createElement('img');
      drinkImage.src = favorites[i].cocktail.strDrinkThumb;
      console.log(favorites[i].cocktail.strDrinkThumb);
      drinkImage.alt = 'Drink Image';

      var drinkName = document.createElement('h3');
    drinkName.textContent = favorites[i].cocktail.strDrink;

      favoriteDiv.appendChild(userNameP);
      favoriteDiv.appendChild(drinkImage);
      favoriteDiv.appendChild(drinkName);

      favoritesContainer.appendChild(favoriteDiv);
  }

  // Display the modal
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';

  // Close the modal when the close button is clicked
  var closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.onclick = function () {
      modal.style.display = 'none';
  };
}

changeImage("base")