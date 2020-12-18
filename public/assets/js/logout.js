$(document).ready(function () {
    $("#logout-btn").on("click", function (e) {
        e.preventDefault();
        localStorage.clear();
        $.ajax("/logout", { type: "GET" });
        window.location.replace("/");
    });
});