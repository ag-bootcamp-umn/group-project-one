const iForm = document.querySelector('#nameForm');
const urlRoot = 'www.thecocktaildb.com/api/json/v1/1/filter.php?'

iForm.addEventListener('submit', getCocktails);

function getCocktails(e) {
    e.preventDefault();

    var ingredient1 = $('#ingredient1').val();
    var ingredient2 = $('#ingredient2').val();
    var ingredient3 = $('#ingredient3').val();

    var requests = [];

    if (ingredient1) {
        requests.push($.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient1}`));
    }
    if (ingredient2) {
        requests.push($.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient2}`));
    }
    if (ingredient3) {
        requests.push($.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient3}`));
    }

    $.when(...requests).then(function(...responses) {
        var results = responses.map(response => response[0].drinks);
        var commonCocktails = findCommonCocktails(results);
        displayCocktails(commonCocktails);
    }, function() {
        console.error('Error fetching cocktails');
    });
}

function findCommonCocktails(results) {
    // Logic to find common cocktails from the results
    // This part will need more complex logic to compare and find common cocktails
}

function displayCocktails(cocktails) {
    // Clear existing results
    $('#results').empty();

    // Display each cocktail in the results
    $.each(cocktails, function(i, cocktail) {
        $('#results').append(`<div>${cocktail.strDrink}</div>`);
    });
}

// Ensure to bind the getCocktails function to the 'Generate Cocktails' button click event
$(document).ready(function() {
    loadIngredients();
    $('#generateBtn').on('click', getCocktails);
});
