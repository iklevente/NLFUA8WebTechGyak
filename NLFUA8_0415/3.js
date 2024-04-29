$(document).ready(function () {
  let clickCount = 0;

  $("#clickLbl").click(function () {
    $("#elso").hide();
  });

  $("#clickLbl2").click(function () {
    clickCount++;
    if (clickCount === 2) $("#masodik").hide();
  });

  $("#header").mousemove(function () {
    window.alert("A header felé vitted az egeret");
  });

  $("#hover").mouseenter(function () {
    window.alert("A gomb felé vitted az egeret");
  });

  $(".inputField").mouseenter(function () {
    $(this).addClass("inputField-hover");
  });

  $(".inputField").mouseleave(function () {
    $(this).removeClass("inputField-hover");
  });

  $(".inputField").click(function () {
    $(".inputField").removeClass("active");
    $(this).addClass("active");
  });
});
