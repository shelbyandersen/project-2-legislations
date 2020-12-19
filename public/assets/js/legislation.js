$(document).ready(function () {
  $("#sidebar").on("click", "div", function () {
    if (this.dataset.billId) {
      window.location.replace("/legislation/" + this.dataset.billId);
    }
  });
});
