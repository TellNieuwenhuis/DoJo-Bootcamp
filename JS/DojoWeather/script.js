function cityAlert(element){
    alert('Burbank');
}

function cityAlert2(element){
    alert('Chicago');
}

function cityAlert3(element){
    alert('Dallas');
}

function removeCookie(){
    var remove1 = document.querySelector('.bottom-page');
    remove1.remove('.bottom-page');
}

function selectTemp(element){
    var x = element.value;
    var temp = document.getElementById('high').innerHTML
    var Fconvert = temp * 1.8 + 32;
    var Cconvert = (temp - 32) * 0.556;
    if(element.value == 'f'){
        console.log(Fconvert)
        
    }else{
        console.log(Cconvert)
    }
}
