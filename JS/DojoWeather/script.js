/*var cookieDiv = document.querySelector(".cookieNote")
*/
/*
function removeCookie(){
    cookieDiv.remove();
}
*/ /*optional way to remove cookies*/

function cityAlert(element){
    alert('Loading weather report...');
}

function removeCookie(){
    var remove1 = document.querySelector('.bottom-page');
    remove1.remove('.bottom-page');
}

function changeToF(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function changeToC(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convertTemp(element){
    console.log(element.value);
    for(var i = 1; 1<9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == 'C'){
            tempSpan.innerText = changeToC(tempVal);
            console.log(element.value)
        }else{
            tempSpan.innerText = changeToF(tempVal);
            console.log(element.value)
        }
    }
}