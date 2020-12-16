$(document).ready(function () {
  
  $(".submit").on("click", function (e) {
    e.preventDefault();
    var newUser = {
    email: $("#email").val().trim(),
    password: $("#password").val().trim(),
    firstName: $("#firstName").val().trim(),
    lastName: $("#lastName").val().trim(),
    username:$("#username").val().trim()

    };
    console.log(newUser.email);
    console.log(newUser.password);
    console.log(newUser.firstName);
    console.log(newUser.lastName);
    console.log(newUser.username)
    
    $.post("/api/user", newUser)
    // ,{
    //   type: "POST",
    //   data: 
    //    {
    //     email,
    //     password,
    //     firstName,
    //     lastName,
    //     username
    //   },
    // })
    .then(function(response) {
      console.log(response)
      // alert("adding new user...")
      window.location.replace("/legislation");
    });
 
  
  });
});

