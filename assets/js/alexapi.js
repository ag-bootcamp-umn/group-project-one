const mainForm = document.querySelector("#mainForm");
const searchResults = document.querySelector("#searchResults");
const urlRoot = "www.thecocktaildb.com/api/json/v1/1/filter.php?";

mainForm.addEventListener("submit", getCocktails);

function getCocktails(e) {
  e.preventDefault();

  const userName = document.querySelector("#userName").value;
  const ingredient1 = document.querySelector("#ingredient1").value;
  const ingredient2 = document.querySelector("#ingredient2").value;
  const ingredient3 = document.querySelector("#ingredient3").value;

//   storeUserInput(userName);

  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient1}`
  )
    .then(res => {
      return res.json();
    })
    .then( data => {
      const drinks = data.drinks;
      
      drinks.forEach((drink) => {
        const {strDrink, idDrink, strDrinkThumb} = drink;

        searchResults.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img src="${strDrinkThumb}" class="card-img-top" alt="${strDrink}">
                <div class="card-body">
                    <h5 class="card-title">${strDrink}</h5>
                    <button value="${idDrink}" class="drinkButton btn btn-warning">Select this drink</button>
                </div>
            </div>
        </div>`;

        searchResults.addEventListener('click', function(e) {
            if (e.target.matches('.drinkButton')) {
                console.log(e.target.value);
                location.assign(`./finalalt.html?q=${e.target.value}&name=${userName}`);
            } 
        });
      });
    });
}


function storeUserInput(userName) {
    let drinksData = JSON.parse(localStorage.getItem('drinksData') || '[]');
    const userData = [{userName}];
    console.log(userData);
}

