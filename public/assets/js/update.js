$(document).ready(function () {
  let username = localStorage.getItem("currentUser");

  $("#account-btn").on("click", function (e) {
    e.preventDefault();
    if(!username){
        return;
    }
    $.ajax("/api/user/" + username, {
        type: "GET"
      })
      .then(function(response) {
        console.log(response);
        window.location.replace("api/user/" + username);
      }).catch(function(){
          window.location.reload();
      });
});

  $("#dlt-btn").on("click", function (e) {
    e.preventDefault();
    const confirmation = confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmation == true) {
      $.ajax("/api/user/" + username, { type: "DELETE" });
      window.location.replace("/");
      localStorage.clear();
    } else {
      window.location.replace(username);
    }
  });

  $("#edit-btn").on("click", function (e) {
    e.preventDefault();
    alert("Your changes have been saved");
    var updatedUser = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      username: $("#username").val().trim(),
    };
    console.log(updatedUser.email);
    console.log(updatedUser.password);
    console.log(updatedUser.firstName);
    console.log(updatedUser.lastName);
    console.log(updatedUser.username);

    $.ajax("/api/user/" + username, {
      type: "PUT",
      data: updatedUser,
    }).then(function (response) {
      console.log(response);
      window.location.reload();
      // console.log("this is working");
      // window.location.replace(username);
    });
  });
});
