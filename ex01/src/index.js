var capsLock = false;
var shift = false;

$(function () {
  $("button.keyboard_key").on("click", function () {
    var key = $(this).text();
    $("textarea")[0].value += key;
  });
});

$(function () {
  $("button.space").on("click", function () {
    var key = " ";
    $("textarea")[0].value += key;
  });
});

$(function () {
  $("button.enter").on("click", function () {
    var key = "\n";
    $("textarea")[0].value += key;
  });
});

$(function () {
  $("button.ok").on("click", function () {
    var text = $("textarea")[0].value;
    alert(text);
  });
});


