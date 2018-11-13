//Arrays to string to Array
var students = ['Eric','Marco',"Sébastien"];
log(students);
// L'argument de join est ce qui se trouvera entre chaque élément du tableau
var studentsJoined = students.join('-');
log(studentsJoined);


var tags = "dev,js,web";
log(tags);
var tagsSplitted = tags.split(',');
log(tagsSplitted);



//Initiation aux function

log("hello devs");

divideLog(846515,13);
divideLog(458,98);
divideLog(458,0);

var myDivideResult = divide(13,2,2);
log(myDivideResult);

function divide(devided,devider,precision){
    if (typeof precision === "undefined"){
        precision = 100;
    }
    if (precision > 100){
        log("divide function warning : precision doit être plus petit ou égal à 100");
        precision = 100;
    }

    if (devider === 0){
        return null;
    }

    var result = devided/devider;
    result = result.toFixed(precision);

    return result;
}

function divideLog(devided,devider){
    var result = divide(devided,devider);
    log("résultat de la division : "+result);
}


function log(message){
    if (typeof console !== "undefined"){
        console.log(typeof message + " : "+message);
    }
}