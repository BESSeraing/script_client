var leftDiv = document.getElementById('left');
var liElements = document.getElementsByTagName('li');

var myLink = document.querySelector('#right p>a');
myLink.setAttribute("href","https://bes-webdeveloper-seraing.be");
var myLinkCollection = document.querySelectorAll('#right p>a');

leftDiv.classList.add("monHyperClass");
if (leftDiv.classList.contains("superClass"))
{
    leftDiv.classList.remove("superClass");
    leftDiv.classList.add("myExtraClass");
}

console.log(leftDiv.innerHTML);
console.log(leftDiv.textContent);
leftDiv.innerHTML = '<span class="bg-warning">CONTENU CENSURE</span>';
// console.log(leftDiv.innerHTML);
//
// console.log(leftDiv.getAttribute('class'));
// console.log(leftDiv.className);
// console.log(leftDiv.classList);
// console.log(liElements);
// console.log(myLink.getAttribute('href'));
// console.log(leftDiv.href);
// console.log(myLinkCollection);