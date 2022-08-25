var x = "";
var y = "";
var iFrame = "";

$(document).ready(function () {
  var src = $("#ifrfb").attr("src");
  iFrame = $("#ifrfb");

  $("#retour").mouseover(function () {
    if (iFrame != "") {
      $(document).unbind("mousemove");
    }
  });
});

$(document).mousemove(function (e) {
  // get mouse coordinates
  x = e.pageX;
  y = e.pageY;

  if (iFrame != "") {
    // calculate iFrame coordinates
    var offTop = y - 10;
    var offLeft = x - 25;

    // set iFrame coordinates
    $(iFrame).offset({ top: offTop, left: offLeft });
  }
});
