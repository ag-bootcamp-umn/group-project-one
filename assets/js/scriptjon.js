


// API call for getting the cocktail by its ID

let drinkId = 11007
ingURL = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

$.ajax({
    url: ingURL,
    success: function(response) {
      console.log(response);
    },
  });
