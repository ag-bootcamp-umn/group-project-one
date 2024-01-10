ingURL = `https://www.thecocktaildb.com/api.php`

$.ajax({
    url: ingURL,
    success: function(response) {
      console.log(response);
    },
  });
  