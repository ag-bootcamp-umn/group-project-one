let drinkId = 11007
ingURL = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

$.ajax({
    url: ingURL,
    success: function(response) {
      console.log(response);
    },
  });
