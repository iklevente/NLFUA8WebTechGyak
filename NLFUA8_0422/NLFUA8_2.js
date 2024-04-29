let htmlcode = document.getElementById("box").innerHTML;
let link = document.getElementById("linkText").innerHTML;
let jelentkezesGomb = false;
$(document).ready(function () {
  $("#text").click(function () {
    alert("HTML kód...");
  });

  $("#html").click(function () {
    alert(htmlcode);
  });

  $("#resultButton").click(function () {
    if (jelentkezesGomb) {
      alert("Jelentkezés");
    }

    let ertek1 = $("#resultText").val();
    alert(`Név: ${ertek1}`);
  });

  $("#apply").click(function () {
    applyButton = true;
  });

  $("#parameter").click(function () {
    alert(link);
  });
});
