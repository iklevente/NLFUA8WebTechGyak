// Az 1.5-es pontot nem lehet megvalósítani a mai böngészőkben, mert az event.pageY tulajdonság nem mérhető

$(document).on("mouseover", "button", function () {
  alert("Gomb felé húzta az egeret");
});

$("#inputField").hover(
  function () {
    $(this).css("border-color", "blue");
  },
  function () {
    $(this).css("border-color", "black");
  }
);

$("#inputField").click(function () {
  $(this).css("background-color", "yellow");
});

$("#header").mousedown(function () {
  alert("Egeret húzott a fejléc szövegéről");
});

$("#clickHere1").click(function () {
  $("#paragraph1").hide();
});

$("#clickHere2").dblclick(function () {
  $("#paragraph2").hide();
});

$("#submit").click(function () {
  alert("Jelentkezés gombra kattintottál!");
});
