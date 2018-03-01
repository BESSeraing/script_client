/**
 * Created by demo on 21/12/17.
 */


var main = document.getElementById('main');

var myA = document.createElement('a');
myA.id = "myA";
myA.href = "https://google.be";
myA.innerHTML = "Google";

main.appendChild(myA);

//8000 ligne de code

var myNewA = document.getElementById('myA');
myNewA.innerHTML += " fkgd";


//
// var myNewA2 = myNewA;
//
// myNewA2.innerHTML += " dhgsd";

console.log(myA.innerHTML);

