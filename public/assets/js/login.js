$(document).ready(function () {
  var submit = $("#login-btn");
  var usernameInput = $("#username-input");
  var passwordInput = $("#password-input");

  submit.on("click", function (event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (userData.username && userData.password) {
      localStorage.setItem("currentUser", userData.username);
      // If we have an username and password we run the loginUser function and clear the form
      loginUser(userData.username, userData.password);
      usernameInput.val("");
      passwordInput.val("");
    } else {
      confirm("Incorrect username or password");
    }
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password,
    })
      .then(function () {
        window.location.replace("/legislation");
        // If there's an error, log the error
      }).catch(function(err) {
        alert("Incorrect Username or Password. Please try again!")
        console.log(err);
      });
  }
  $("#logout-btn").on("click", function (e) {
    e.preventDefault();
    alert("You've successfully been logged out");
    localStorage.clear();
    $.ajax("/logout", { type: "GET" });
    window.location.replace("/");
  });
});
