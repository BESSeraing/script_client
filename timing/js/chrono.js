var nbrInterval = 0;
var interval = setInterval(chrono,15);

var minutesSpan = document.getElementById('minutes');
var secondesSpan = document.getElementById('seconds');
var csSpan = document.getElementById('centiSec');

var myString = "Sébastien";
var myArray = myString.split('');
console.log(myArray);

var myBoolean = new Boolean(myString.length>50./captureEvents());
console.log(myBoolean);

function chrono(){
    nbrInterval ++;
    var nbrMilliSec = nbrInterval*15;

    var seconds = Math.floor(nbrMilliSec/1000)%60;
    if (seconds<10){
        seconds = "0"+seconds;
    }
    // console.log(seconds);
    secondesSpan.innerHTML = seconds;

    var cs = Math.floor(nbrMilliSec/10)%100;
    csSpan.innerHTML = cs;

}

for(var i=0;i<100;i++){
    if (estPair(i)){
        console.log(i);
    }
}

function estPair(nombre){
    if (nombre%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

