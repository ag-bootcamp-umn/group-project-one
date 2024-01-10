const iForm = document.querySelector('#ingredients');

iForm.addEventListener('submit', getCocktails);

function getCocktails(e) {
    e.preventDefault();

    const userName = document.querySelector('#userName').value;
    const ingredient1 = document.querySelector('#ingredient1').value;
    const ingredient2 = document.querySelector('#ingredient2').value;
    const ingredient3 = document.querySelector('#ingredient3').value;

    console.log(userName, ingredient1, ingredient2, ingredient3);
}