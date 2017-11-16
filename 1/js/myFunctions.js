

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
//
// testIfEven(50);
// testIfEven(21);
//
// multiply(5,89);
// multiply(5,90);
// multiply(5,86);
// multiply(5,89135);
// multiply(5532,89);

var myRandomInt = getRandomInt(90,99);
console.log(myRandomInt);



function getRandomInt(minValue, maxValue){
    var maxValues = maxValue - minValue;
    return Math.floor(Math.random() * maxValues) + minValue+1 ;
}

function multiply(number1,number2){
    console.log(number1 * number2);
}

function testIfEven(myNumber){
    if (myNumber%2 == 0){
        console.log('pair');
    }
    else{
        console.log('chiffre impair');
    }
}

function sayHello(){
    console.log('hi');
}


