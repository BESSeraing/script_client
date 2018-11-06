var myString = "Jonathan";
myString = "";


var studentsNumber = "15.684651";

var myNumber = 30.3486584532;
myNumber = myNumber *2;

var isBoolean = false;
isBoolean = true;

var myArray = ["pomme","poire","fraise"];
myArray.push("carotte");

var myObject = {
    fruit: "pomme",
    couleur: "vert",
    poids: 100
};

// console.log(parseFloat(studentsNumber));
//
//
// console.log("mon string est "+myString);
// console.log("mon string fait "+myString.length+' charactères');
// console.log("mon string enb maj est "+myString.toUpperCase());
// console.log("mon number est "+myNumber.toPrecision(6));
// console.log("la valeur de l'index 1 de mon tableau est "+myArray[1]);
// console.log("la longueur de mon tableau est "+myArray.length);
// console.log("la propriété couleur de mon object est "+myObject.couleur);


if (myString === "toto"){
    console.log("Condition ok");
}
else if(myString == "Jonathan"){
    console.log("2eme condition ok");
}
else{
    console.log("aucune condition ok");
}

