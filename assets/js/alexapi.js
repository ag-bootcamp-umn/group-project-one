
// 
const mainForm = document.querySelector("#mainForm");
const searchResults = document.querySelector("#searchResults");
// const urlRoot = "www.thecocktaildb.com/api/json/v1/1/filter.php?";

mainForm.addEventListener("submit", getCocktails);

async function getCocktails(e) {
  e.preventDefault();

  // const userName = document.querySelector("#userName").value;
  const ingredient1 = document.querySelector("#ingredient1").value;
  const ingredient2 = document.querySelector("#ingredient2").value;
  const ingredient3 = document.querySelector("#ingredient3").value;
  const userName = 'Doug';
  // const ingredient1 = 'Tequila';
  // const ingredient2 = 'Triple sec';
  // const ingredient3 = 'Lime juice';
  ////////////////////////////////////////////////////////////////////

  async function fetchData(url) {
    const res = await fetch(url);
    const jData = await res.json();
    const data = jData.drinks;
    return data;
  }

  async function getCocktailData(input) {
    const data = await fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`
    );
    return data;
  }

  async function compareCocktails() {
    const cocktails1 = await getCocktailData(ingredient1);
    const cocktails2 = await getCocktailData(ingredient2);
    const cocktails3 = await getCocktailData(ingredient3);

    const totalArray = [...cocktails1, ...cocktails2, ...cocktails3];
    console.log("total", totalArray);

    let cocktailCounter = totalArray.reduce( (acc, {idDrink}) => {
      return ( acc[idDrink] ? ++acc[idDrink] : (acc[idDrink] = 1), acc);
    }, {});

    console.log(cocktailCounter);     

    const totalUniq = [
      ...totalArray.filter(({idDrink}) => cocktailCounter[idDrink] == 3)
        .reduce((map, obj) => map.set(obj.idDrink, obj), new Map())
        .values(),
    ];
    console.log('totalUniq', totalUniq);

    totalUniq.forEach((drink) => {
      displayDrink(drink);
    });

    function displayDrink(drink) {
      const { strDrink, idDrink, strDrinkThumb } = drink;

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

      searchResults.addEventListener("click", function (e) {
        if (e.target.matches(".drinkButton")) {
          console.log(e.target.value);
          location.assign(`./final.html?q=${e.target.value}&name=${userName}`);
        }
      });
      
    }
  }

  compareCocktails();
}

function storeUserInput(userName) {
  let drinksData = JSON.parse(localStorage.getItem("drinksData") || "[]");
  const userData = [{ userName }];
  console.log(userData);
}
