// store drink once Alex's saveDrink button is clicked
// drinkID
// const drinkID = however Alex stored it
// display fav drinks once Alex's seeFavs button is clicked
// pull the drinkID
// display  userName, drinkID, drinkImage, drinkLink 

function displayDrink() {
// Store the variables in localStorage
// localStorage.setItem('userNames', JSON.stringify(userNames));
// localStorage.setItem('drinkIDs', JSON.stringify(drinkIDs));
// localStorage.setItem('drinkImages', JSON.stringify(drinkImages));
// localStorage.setItem('drinkLinks', JSON.stringify(drinkLinks));

// Retrieve the stored values from localStorage
var storedUserNames = JSON.parse(localStorage.getItem('userNames')) || [];
var storedDrinkIDs = JSON.parse(localStorage.getItem('drinkIDs')) || [];
var storedDrinkImages = JSON.parse(localStorage.getItem('drinkImages')) || [];
var storedDrinkLinks = JSON.parse(localStorage.getItem('drinkLinks')) || [];

    // Check if there are stored favorites
    if (storedUserNames.length === 0) {
        document.getElementById('favoritesContainer').textContent = 'There are no stored favorites';
        return;
    }

    // Create and append elements for each stored favorite
    var favoritesContainer = document.getElementById('favoritesContainer');
    for (var i = 0; i < storedUserNames.length; i++) {
        var favoriteDiv = document.createElement('div');
        favoriteDiv.classList.add('favorite');

        var userNameP = document.createElement('p');
        userNameP.textContent = 'User Name: ' + storedUserNames[i];

        var drinkIDP = document.createElement('p');
        drinkIDP.textContent = 'Drink ID: ' + storedDrinkIDs[i];

        var drinkImage = document.createElement('img');
        drinkImage.src = storedDrinkImages[i];
        drinkImage.alt = 'Drink Image';

        var drinkLink = document.createElement('a');
        drinkLink.href = storedDrinkLinks[i];
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




