
//Clone
var hr = document.createElement('hr');
var hr2 = hr.cloneNode(false);

var myP = document.getElementById("myP");
var paragraph2 = myP.cloneNode(true);

document.getElementById('headerId').appendChild(paragraph2);
// document.getElementById('headerId').appendChild(hr);
myP.appendChild(hr2);
// paragraph2.setAttribute('id','paragraph2');
paragraph2.id = 'paragraph2';

//REplace

var links = document.querySelectorAll("a");

var newLabel = document.createTextNode("et un hyperlien");

for(var i=0;i<links.length;i++){
    links[i].replaceChild(newLabel,links[i].firstChild);
}

var firstLink = document.querySelector('a');
firstLink.parentNode.removeChild(firstLink);




function log(varName,value){
    console.log('la variable '+varName+' contient la valeur : '+value);
}