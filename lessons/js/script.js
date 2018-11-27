//Exemple reférence vs passage par valeur.

var nick1 = 'Clarisse';
var nick2 = nick1;

log("nick1",nick1);
log("nick2",nick2);

nick1 = "Zoé";

log("nick1",nick1);
log("nick2",nick2);



var h1 = document.getElementById("title");
var h1bis = h1;

h1.textContent = "New TEXT content";

log('h1bis.textContent',h1bis.textContent);


function log(varName,value){
    console.log('la variable '+varName+' contient la valeur : '+value);
}