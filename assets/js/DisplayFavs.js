// pull the drinkID


// display  userName, drinkID, drinkImage, drinkLink  by pulling them from an array of objects called "favorites" that will be in local storage
function displayFavDrinks() {
    const favorites = JSON.parse(localStorage.getItem('projectCocktail')) || [];

    // example of what the array will have in it in order to build the function with the variables we are using
    [
        {
            userName: 'Katy',
            idDrink: 1,
            strDrink: 'Boston Sidecar',
            strDrinkThumb: 'link to picture',

        },
        {
            userName: 'Dizzy',
            idDrink: 2,
            strDrink: 'Margarita',
            strDrinkThumb: 'link to picture',
        },
    ]
    // Check if there are stored favorites
    if (favorites.length === 0) {
        document.getElementById('favoritesContainer').textContent = 'There are no stored favorites';
        return;
    }

    // Create and append elements for each stored favorite
    var favoritesContainer = document.getElementById('favoritesContainer');
    for (var i = 0; i < favorites.length; i++) {
        var favoriteDiv = document.createElement('div');
        favoriteDiv.classList.add('favorite');

        var userNameP = document.createElement('p');
        userNameP.textContent = 'User Name: ' + favorites[i].userName;

        // var drinkIDP = document.createElement('p');
        // drinkIDP.textContent = 'Drink ID: ' + favorites[i].idDrink;

        var drinkImage = document.createElement('img');
        drinkImage.src = favorites[i].strDrinkThumb;
        drinkImage.alt = 'Drink Image';

        var drinkName = document.createElement('a');
        drinkLink.href = favorites[i].strDrink;
        drinkLink.target = '_blank';
        drinkLink.textContent = 'Name: ';

        favoriteDiv.appendChild(userNameP);
        favoriteDiv.appendChild(drinkIDP);
        favoriteDiv.appendChild(drinkImage);
        favoriteDiv.appendChild(drinkLink);

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




