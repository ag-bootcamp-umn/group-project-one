$(document).ready(function() {
    loadIngredients();
});


function loadIngredients() {
    $.ajax({
        url: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
        type: 'GET',
        success: function(response) {
            response.drinks.forEach(function(drink) {
                $('#ingredient1, #ingredient2, #ingredient3').append($('<option>', {
                    value: drink.strIngredient1,
                    text: drink.strIngredient1
                }));
            });
        },
        error: function() {
            console.log('Error fetching ingredients');
        }
    });
}

