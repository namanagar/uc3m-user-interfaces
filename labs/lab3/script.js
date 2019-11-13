function doubleText() {
  var text = $("#part-1").html();
  let dbl = text.concat("\n", text);
  $("#part-1").text(dbl);
}

function turnRed() {
  $("#last-item").addClass("color_red");
}

function updateSelect() {
  let text = $('#selector option:selected').toArray().map(item => item.text).join();
  $("#writable").text(text);
}

$(document).ready(function() {
  $("#part-4 p").hover(function(){
    $(this).addClass("color_red");
    }, function(){
    $(this).removeClass("color_red");
  });
})
