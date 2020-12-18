$(document).ready(function () {
    let username = localStorage.getItem('currentUser');
    $("#account-btn").on("click", function (e) {
        e.preventDefault();
        $.ajax("/api/user/" + username, {
            type: "GET"
          })
          .then(function(response) {
            console.log(response);
            window.location.replace("api/user/" + username);
          });
    });
    $("#edit-btn").on("click", function (e) {
      e.preventDefault();
      var updatedUser = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      username:$("#username").val().trim()
  
      };
      console.log(updatedUser.email);
      console.log(updatedUser.password);
      console.log(updatedUser.firstName);
      console.log(updatedUser.lastName);
      console.log(updatedUser.username)
      
      $.ajax("/api/user/" + id, {
        type: "PUT",
        data: updatedUser
      })
      .then(function(response) {
        console.log(response)
        window.location.reload();
      });
   
    
    });
  });
  
  