$(document).ready(function () {
  

  const eInput = $("#email");
  const pInput = $("#password");
  const fInput = $("#firstName");
  const lInput = $("#lastName");
  const uInput = $("#username");
  const button = $("#createbtn");

  button.on("click", function (e) {
    e.preventDefault();
    var newUser = {
    email: eInput.val().trim(),
    password: pInput.val().trim(),
    firstName: fInput.val().trim(),
    lastName: lInput.val().trim(),
    username: uInput.val().trim()

    };
    console.log(newUser.email);
    console.log(newUser.password);
    console.log(newUser.firstName);
    console.log(newUser.lastName);
    console.log(newUser.username)
    
    if (!newUser.username || !newUser.password || !newUser.firstName || !newUser.lastName) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(newUser.username, newUser.password, newUser.firstName, newUser.lastName, newUser.email);
    uInput.val("");
    pInput.val("");
    fInput.val("");
    lInput.val("");
    eInput.val("");
    });
    function signUpUser(username,password,firstName,lastName,email) {
      $.post("/api/signup", {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email
      })
        .then(function(data) {
          window.location.replace("/legislation");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      console.log("wont log in correctly")
    }
});

