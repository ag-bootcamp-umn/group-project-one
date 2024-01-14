// $(document).ready(function() {
//     // Event listener for submit button
//     $('#mainForm').on('submit', getCocktails);
// });

// function getCocktails(e) {
//     e.preventDefault();
//     // Retrieve values from the input fields and store them in variables
//     // jQuerys val() method is used to get the values of form elements.
//     var userName = $('#userName').val();
//     var ingredient1 = $('#ingredient1').val();
//     var ingredient2 = $('#ingredient2').val();
//     var ingredient3 = $('#ingredient3').val();

//     // Combine the ingredients into an array and filter out any empty values
//     var ingredients = [ingredient1, ingredient2, ingredient3].filter(Boolean);

//     // Initialize an object to keep track of all cocktails and a counter for the number of completed fetches
//     // 'allCocktails' will be used to store information about each cocktail you fetch from the API.
//     // Think of 'allCocktails' as a big box where you're going to put each cocktail you find. 
//     // Each cocktail will have its own spot in this box, identified by its unique ID (like a name tag). 
//     // This way, you can easily find and count how many times each cocktail appears in your search results.
//     var allCocktails = {};

//     // This line is creating a variable named fetchCount and setting its initial value to 0. This variable will be used as a counter.
//     // The purpose of 'fetchCount' is to keep track of how many API requests (fetches) you have completed. 
//     // When all these requests are done (up to three) you can then process all the collected data.
//     // When the counter shows the same number as the total number of ingredients you asked about, you know you're done collecting data and can move on to the next step.
//     var fetchCount = 0;

//     // Iterate over each ingredient
//     ingredients.forEach(function(ingredient) {
//         // Perform an Jquery AJAX request for each ingredient
//         $.ajax({
//             url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
//             method: 'GET',
//             dataType: 'json',
//             success: function(data) {
//                 // If data is returned from the API
//                 if (data.drinks) {
//                     // 'data.drinks' will be an array of drink objects, where each object contains information about a specific cocktail.
//                     data.drinks.forEach(function(drink) {
//                         // Check if the current drink is already in our allCocktails object
//                         if (allCocktails[drink.idDrink]) {
//                             // If the drink is already in the object, increment its count by 1.
//                             // This count helps us track how many ingredients returned this particular drink.
//                             allCocktails[drink.idDrink].count++;
//                         } else {
//                             // If the drink is not in the object, add it with a count of 1.
//                             // We use the spread operator(...) to copy all properties of the drink object.
//                             // We also add a new property 'count' set to 1, indicating this is the first occurrence of this drink.
//                             allCocktails[drink.idDrink] = { ...drink, count: 1 };
//                         }
//                     });
//                 }
//             },
//             error: function() {
//                 // If there's an error in fetching data, display an error message in the 'searchResults' element
//                 $('#searchResults').append(`<p>Error fetching cocktail data for ${ingredient}. Please try again.</p>`);
//             },
//             complete: function() {
//                 // Increment the fetch counter after each AJAX call is completed
//                 fetchCount++;
//                 // If all AJAX calls have been completed
//                 // This compares the fetchCount (number of completed AJAX requests) to the length of the ingredients array.
//                 // If the number of completed requests equals the number of ingredients, it means all ingredient data has been fetched.
//                 if (fetchCount === ingredients.length) {
                     
//                     // This line is creating a new array, 'filteredCocktails', containing only the drinks that match a specific criteria.
//                     // 'Object.values(allCocktails)' converts the allCocktails object into an array of its values (the cocktail data).
//                     // The filter method is used to keep only those drinks that appear in all ingredient results.
//                     // It checks if the count property of each drink equals the number of ingredients.
//                     var filteredCocktails = Object.values(allCocktails).filter(drink => 
                        
//                         // This count property was incremented each time the drink was found in the results of an ingredient.
//                         // So, if 'count' equals the length of the ingredients array, it means this drink was found in every ingredient search.
//                         drink.count === ingredients.length);
//                     // Display the filtered cocktails!! (hopefully)
//                     displayCocktails(filteredCocktails, userName);
//                 }
//             }
//         });
//     });
// }
// // Function to display the cocktails
// function displayCocktails(cocktails, userName) {
//     // initialize a variable to hold the HTML content
//     var htmlContent = '';
//     // Check if there are no cocktails
//     if (cocktails.length === 0) {
//         // Display a message to the user if no cocktails are found
//         htmlContent = '<p>No cocktails found that match the selected ingredients.</p>';

//     // Iterate over each cocktail and build the HTML content
//     } else {
//         cocktails.forEach(function(drink) {
//             var { strDrink, idDrink, strDrinkThumb } = drink;
//             htmlContent += `
//                 <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//                     <div class="card">
//                         <img src="${strDrinkThumb}" class="card-img-top" alt="${strDrink}">
//                         <div class="card-body">
//                             <h5 class="card-title">${strDrink}</h5>
//                             <button value="${idDrink}" class="drinkButton btn btn-warning">Select this drink</button>
//                         </div>
//                     </div>
//                 </div>`;
//         });
//     }
// // Set the inner HTML of the 'searchResults' element and attach a click event listener to buttons with class 'drinkButton'
//     $('#searchResults').html(htmlContent).on('click', '.drinkButton', function() {
//         console.log(this.value);
//         window.open(`./final.html?q=${this.value}&name=${userName}`);
//     });
// }
