/**
 * Created by demo on 11/01/18.
 */
var pos = 0;
var speed = 1;
var direction = 1;
var totalIntervals = 0;
var ball = document.getElementById('ball');
var paused = false;
setInterval(clock,15);


function clock(){
    if (!paused){
        totalIntervals ++;
        moveBall();
        chrono();
    }
}

function chrono(){
    var miliSeconds = totalIntervals *15;

    document.getElementById('chrono').innerHTML = (miliSeconds/1000).toPrecision(3);

}

function moveBall(){
    if (pos+speed > window.innerWidth || pos+speed < 0){
        direction *= -1;
    }
    pos+= (speed * direction);

    // console.log("totalintervals : "+totalIntervals);
    ball.style.left = pos + "px";

    if (totalIntervals %3 == 0){
        console.log("beep");
    }
}

document.addEventListener('keydown',function(e){
    console.log(e.keyCode);
    switch (e.keyCode){
        case 39 :
            speed ++;
        break;
        case 37:
            speed --;
        break;
        case 32:
            paused = !paused;
        break;
    }
});