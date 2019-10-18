i = 0;
addedItems = [];
function addMe() {
    var included = addedItems.includes(document.getElementById('userAdd').value);
    if (i<7 && document.getElementById('userAdd').value != "" && included == false) {
        addedItems.push(document.getElementById('userAdd').value);
        i++;
        var newItem = document.createElement('li');
        var newText = document.createTextNode(document.getElementById('userAdd').value);
        newItem.appendChild(newText);
        var position = document.getElementsByTagName('ol')[0];
        newItem.style.fontSize = 50;
        newItem.style.fontFamily = "Courier New";
        newItem.style.marginLeft = 5%
        position.appendChild(newItem);
        document.getElementById('userAdd').value = "";
        console.log(i);
        if (i == 7) {
            document.getElementById("listFull").innerHTML = "The list is full";
        }
    }
    else if (document.getElementById('userAdd').value == "") {
        window.alert("The input is empty");
    }
    else {
        window.alert("Already in the list");
        document.getElementById('userAdd').value = "";
    }
}
function removeMe() {
    var userNum = parseInt(document.getElementById('userRemove').value);
    addedItems.splice(userNum-1,1)
    var a = document.getElementsByTagName('li')[userNum-1];
    var b = a.parentNode;
    b.removeChild(a);
    document.getElementById('userRemove').value = "";
    i--;
    if(i<7) {
        document.getElementById("listFull").innerHTML = "";
    }
}