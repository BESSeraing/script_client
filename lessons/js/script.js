//KeyboardsEvent
var speed = 1;
var directionX =0;
var directionY =1;

document.getElementById("ptitBoulRouge").style.left = "10px";
document.getElementById("ptitBoulRouge").style.top = "50px";
document.addEventListener('keydown',keyDown);

var interval = setInterval(clock,1000/60);

function clock(){
    console.log('interval');

    var posX = parseInt(document.getElementById("ptitBoulRouge").style.left)+directionX;
    var posY = parseInt(document.getElementById("ptitBoulRouge").style.top)+directionY;

    document.getElementById("ptitBoulRouge").style.left = posX+"px";
    document.getElementById("ptitBoulRouge").style.top = posY+"px";
}




function keyDown(e){
    console.log("code touche down : "+e.keyCode);

    switch (e.keyCode){
        case 37:
            directionX -= speed;
            break;
        case 39:
            directionX += speed;
            break;
        case 40:
            directionY += speed;
            break;
        case 38:
            directionY -= speed;
            break;
    }


}

//Bubble vs capture
document.getElementById("container").addEventListener("click",clickedContainer);
document.getElementById("red").addEventListener("click",clickedRed);


function clickedRed(e){
    console.log('RED CLICKED');
    console.log(e.type);
    e.preventDefault();

}

function clickedContainer(e){
    console.log('Container CLICKED');
}

//Basic event
// document.getElementById('myA').addEventListener("click",clicked);
//
//
//
//
// function clicked(e){
//     // e.preventDefault();
//     alert("CLIIIIIIIICK");
//     // console.log(e);
// }


function log(varName,value){
    console.log('la variable '+varName+' contient la valeur : '+value);
}