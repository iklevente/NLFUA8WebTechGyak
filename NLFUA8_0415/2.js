$(document).ready(function () {
  $("#k1").click(function () {
    $("#list1 li:lt(2)").hide();
    $("#list2 li:lt(2)").hide();
    $("a").hide();
  });

  $("#k2").click(function () {
    $("#k2").hide();
    $("#list1 li:lt(2)").hide();
    $("#list2 li:lt(2)").hide();
    $("a").hide();
  });

  $("#k3").click(function () {
    $("table").hide();
    $("#list1 li:lt(2)").hide();
    $("#list2 li:lt(2)").hide();
    $("a").hide();
  });

  $("#k4").click(function () {
    $("#list1 li:lt(2)").hide();
    $("#list2 li:lt(2)").hide();
    $("a").text("").attr("href", "");
  });

  $("#k5").click(function () {
    $("table tr:even").hide();
    $("#list1 li:lt(2)").hide();
    $("#list2 li:lt(2)").hide();
    $("a").hide();
  });
});
