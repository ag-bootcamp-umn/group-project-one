// pull the drinkID


// display  userName, drinkID, drinkImage, drinkLink 
function displayFavDrinks() {
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

[
    {
        username: 'Katy',
        drinkId: 1,
        image: '...',
        link: '...'
    },
    {
        username: 'Dizzy',
        drinkId: 2,
        image: '...',
        link: '...'
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
        userNameP.textContent = 'User Name: ' + favorites[i].username;

        var drinkIDP = document.createElement('p');
        drinkIDP.textContent = 'Drink ID: ' + favorites[i].drinkId;

        var drinkImage = document.createElement('img');
        drinkImage.src = favorites[i].image;
        drinkImage.alt = 'Drink Image';

        var drinkLink = document.createElement('a');
        drinkLink.href = favorites[i].link;
        drinkLink.target = '_blank';
        drinkLink.textContent = 'Drink Link';

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




