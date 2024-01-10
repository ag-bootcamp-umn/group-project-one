// API call for getting the cocktail by its ID
let drinkId
ingURL = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

$.ajax({
  url: ingURL,
  success: function (response) {
    let array = response.drinks[0]
    let name = array.strDrink
    console.log(name)
  },
});