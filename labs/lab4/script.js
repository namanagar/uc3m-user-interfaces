function addRow(){
    table = document.getElementById("editable");
    let row = table.insertRow();
    let element = document.forms['info'].elements;
    for (var i = 0; i < 4; i++) {
      let cell = row.insertCell();
      let text = i == 3 ? document.createTextNode(element[i].checked) : document.createTextNode(element[i].value);
      cell.appendChild(text);
    }
}

$(document).ready(function() {
  $('table').on('mouseover','tr',function(event){
    var $tr = $(event.currentTarget);
    var status = $tr.find("td:last").html();

    if (status === "true") {
      $("#message").text("this person is employee");
    }
    else {
      $("#message").text("this person is not employee");
    }
  })
});