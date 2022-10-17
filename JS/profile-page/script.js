var name1 = document.querySelector(".user-name");

function changeName(){
    name1.innerHTML = "Tell Nieuwenhuis";
}

var onemore = document.querySelector("#badge2");
function addUser(){
    ++badge2.innerHTML;
}

function removeUser(id){
    var remove1 = document.querySelector(id);
    remove1.remove('.card-list-item');
}

function requestCount(){
    var newNum = document.getElementById("badge1").innerHTML;
    var value = newNum - 1;
    document.getElementById('badge1').innerHTML = value;
}

