$(document).ready(function () {
  // Elrejt gomb - bekezdések elrejtése
  $("#hideParagraphs").click(function () {
    $("p").hide();
  });

  // Megjelenít gomb - bekezdések megjelenítése
  $("#showParagraphs").click(function () {
    $("p").show();
  });

  // Elrejt/Megjelenít gomb - bekezdések toggle
  $("#toggleParagraphs").click(function () {
    $("p").toggle();
  });

  // Áttetszőség=0.1 gomb - űrlap elhalványítása
  $("#opacity01").click(function () {
    $("form").css("opacity", "0.1");
  });

  // Áttetszőség=0.5 gomb - űrlap erősítése
  $("#opacity05").click(function () {
    $("form").css("opacity", "0.5");
  });

  // Áttetszőség=0.8 gomb - űrlap még erősebbé tétele
  $("#opacity08").click(function () {
    $("form").css("opacity", "0.8");
  });

  // Elrejt gomb - űrlap elrejtése
  $("#hideForm").click(function () {
    $("form").hide();
  });

  // Megjelenít gomb - űrlap megjelenítése
  $("#showForm").click(function () {
    $("form").show();
  });

  // Elrejt/Megjelenít gomb - űrlap toggle
  $("#toggleForm").click(function () {
    $("form").toggle();
  });

  // Űrlap Jelentkezés gomb funkciója (nem specifikált a feladatban)
  $("#submit").click(function () {
    alert("Jelentkezés gombra kattintottál!");
  });
});
