$(document).ready(function () {
  $("#addText").click(function () {
    $("#box").text("Mérnökinformatikus");
  });

  $("#button").click(function () {
    $("#box").text("PTI Gomb");
  });

  $("#newButton").click(function () {
    $("#linkText").after("<button>ME GEIK-PTI</button>");
  });

  $("#newHeader").click(function () {
    $("body").prepend("<h1>JQuery feladat</h1>");
  });

  $("#newH2").click(function () {
    $("#adSzoveg").before("<h4>HTML -Add elements</h4>");
  });

  $("#newFormHeader").click(function () {
    $("form").prepend("<h2>ŰRLAP-NLFUA8</h2>");
  });
});
