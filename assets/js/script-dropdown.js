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
