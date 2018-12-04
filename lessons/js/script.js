//KeyboardsEvent
var speed = 10;
document.getElementById("ptitBoulRouge").style.left = "10px";
document.getElementById("ptitBoulRouge").style.bottom = "50px";
document.addEventListener('keydown',keyDown);

function keyDown(e){
    console.log("code touche down : "+e.keyCode);


    var directionX =0;
    var directionY =0;
    switch (e.keyCode){
        case 37:
            directionX -= speed;
            break;
        case 39:
            directionX += speed;
            break;
        case 40:
            directionY -= speed;
            break;
        case 38:
            directionY += speed;
            break;
    }

    var posX = parseInt(document.getElementById("ptitBoulRouge").style.left)+directionX;
    var posY = parseInt(document.getElementById("ptitBoulRouge").style.bottom)+directionY;

    document.getElementById("ptitBoulRouge").style.left = posX+"px";
    document.getElementById("ptitBoulRouge").style.bottom = posY+"px";
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