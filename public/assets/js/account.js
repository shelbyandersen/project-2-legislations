$(document).ready(function () {
  $("#edit-btn").on("click", function (e) {
    e.preventDefault();
    var id = 1;
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

    $.ajax("/api/user/" + id, {
      type: "PUT",
      data: updatedUser,
    }).then(function (response) {
      console.log(response);
      window.location.reload();
    });

    $("#dlt-btn").on("click", function (e) {
      e.preventDefault();
      var id = 2;

      $.ajax("/api/user/" + id, { type: "DELETE" });
      window.location.replace("/");
    });
  });
});
