function addRow(){
    table = document.getElementById("editable");
    let row = table.insertRow();
    let element = document.forms['info'].elements;
    for (var i = 0; i < 3; i++) {
      let cell = row.insertCell();
      let text = i == 2 ? document.createTextNode(element[i].checked) : document.createTextNode(element[i].value);
      cell.appendChild(text);
    }
}