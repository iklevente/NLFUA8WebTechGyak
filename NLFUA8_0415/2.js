function clickBtn() {
  $("#clickBtn").each(function () {
    $("p").hide();
  });
}

function hideK1() {
  $("ul").each(function () {
    $(this).children("li:lt(2)").hide();
  });
  $("a").hide();
}

function hideK2() {
  $("ul").each(function () {
    $(this).children("li:lt(2)").hide();
  });
  $("a, #K2").hide();
}

function hideK3() {
  $("ul").each(function () {
    $(this).children("li:lt(2)").hide();
  });
  $("header, a").hide();
}

function hideK4() {
  $("ul").each(function () {
    $(this).children("li:lt(2)").hide();
  });
  $("a, #linkText").hide();
}

function hideK5() {
  $("ul").each(function () {
    $(this).children("li:lt(2)").hide();
  });
  $("a").hide();
  $("table").each(function () {
    $(this).find("tr:odd").hide();
  });
}
