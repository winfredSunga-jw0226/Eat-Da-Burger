//wait until DOM is ready
$(function() {
  $(".add-burger-form").on("submit", function(event) {
    //prevent page from reloading
    event.preventDefault();

    var newBurger = {
      name : $("#burger-text").val().trim()
    };

    console.log(newBurger);

    //send a post request
    $.ajax("/api/burgers", {
      type : "POST",
      data : newBurger
    }).then( function() {
      console.log("creating a new burger!");

      //reload page
      location.reload();
    });
  });

  $(".button-burger-not-devoured").on("click", function(event) {
    //prevent page from reloading
    event.preventDefault();

    //grab the id of the burger to be updated
    var id = $(this).data("burgerid");

    console.log("I clicked " + id);

    //submit a PUT request
    $.ajax("/api/burgers/" + id, {
      type : "PUT",
      data : {devoured : true}
    }).then(function() {
      console.log("Changing the devoured boolean value to true!");

      //reload the page to get updated list
      location.reload();
    });

  })
});