$(document).ready(function () {
    // Listen for the click event on the submit button
    $("#nameForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the name e
        var userName = $("#userName").val();

        // Store the name
        localStorage.setItem("userName", userName);

        // Clear the field
        $("#userName").val("");
    });
});

