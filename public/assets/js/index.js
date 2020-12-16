$(document).ready(function () {
$(".create").on("click",function(){
    console.log("inside the create");
    $.get("/create").then(function(response) {
        console.log(response)
        // alert("adding new user...")
        window.location.replace("/create");
      });
});
});