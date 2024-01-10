
// Wait until the DOM is fully loaded before running the code inside
$(document).ready(function() {
    loadIngredients();  // Call the loadIngredients function once the DOM is ready
});


function loadIngredients() {
    // Make an AJAX request using jQuery
    $.ajax({
        url: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
        type: 'GET', // Specifies the request type as 'GET' to retrieve data

        // Function to handle the response when the request is successful
        success: function(response) {
            response.drinks.forEach(function(drink) {  // Iterate over each drink in the response

                // Append an option element to each of the select elements (ingredient1, ingredient2, ingredient3)
                $('#ingredient1, #ingredient2, #ingredient3').append($('<option>', {
                    value: drink.strIngredient1, // Set the value attribute of the option element to the ingredient name
                    text: drink.strIngredient1 // Set the visible text of the option element to the ingredient name
                }));
            });
        },
        // if request fails log error
        error: function() {
            console.log('Error fetching ingredients');
        }
    });
}

