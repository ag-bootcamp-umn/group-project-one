// store drink once Alex's saveDrink button is clicked
// drinkID


// display fav drinks once Alex's seeFavs button is clicked
// pull the drinkID
// display  userName, drinkID, drinkImage, drinkLink 

function storeDrinkID ()
localStorage.setItem(userName, idDrink)

for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  console.log(key, value);
}


