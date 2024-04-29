$(document).ready(function () {
  $("#calculator").submit(function (event) {
    event.preventDefault();

    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var muvelet = $("input[name='muvelet']:checked").val();
    var result;

    if (isNaN(number1) || isNaN(number2)) {
      $("#result").text("Kérem adjon meg érvényes számokat!");
      return;
    }

    switch (muvelet) {
      case "osszeadas":
        result = number1 + number2;
        break;
      case "kivonas":
        result = number1 - number2;
        break;
      case "szorzas":
        result = number1 * number2;
        break;
      case "osztas":
        if (number2 === 0) {
          $("#result").text("Nullával nem oszthatunk!");
          return;
        }
        result = number1 / number2;
        break;
      default:
        $("#result").text("Kérem válasszon műveletet!");
        return;
    }

    $("#result").text("Eredmény: " + result);
  });
});
