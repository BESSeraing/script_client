var myInteger = "1";
var myFloat = 2.5;
var myString = "une chaine de charactères";
var myBoolean = true;
var myArray = [1,2,3];
var myObject = {
    prop1: 'Ma première propriété'
};


console.log('Ceci est mon premier message dans la console');

console.info("type de myInteger : "+typeof parseInt(myInteger));
console.warn("type de myFloat : "+typeof myFloat);

console.error("type de myString : "+typeof myString);
console.debug("type de myBoolean : "+typeof myBoolean);
console.log("type de myArray : "+typeof myArray);
console.log("exemple de join : "+myArray.join(', '));



myArray.push(50);
console.log('Acces à ma prop1 : ' + myObject.prop1); //Première écriture pour accéder aux propriétés d'un tableau
myObject.prop2 = 'MA deuxieme propriété';
console.log('Acces à ma prop2 : ' + myObject.prop2);

//Parcourir un objet litéral
for (var propName in myObject){
    console.log(propName+' = '+ myObject[propName]);//Deuxieme écriture pour accéder aux propriétés d'un tableau
}







for (var i =0;i< 100;i ++){
    if (i%2 == 0){
        console.log(i);
    }
}


var addition = parseInt(myInteger)+myFloat;
console.log('addition result : '+addition);

var testCondition = 1;

var testCondition2 = 1;
var testCondition3 = "1";

console.log(testCondition);
console.log(testCondition == testCondition2);
console.log(testCondition == testCondition3);
console.log(testCondition === testCondition3);


var randomMonthNum = Math.floor((Math.random() * 12) + 1);
console.log('chiffre du mois :'+randomMonthNum);
switch (randomMonthNum){
    case 1 :
        console.log('mois de janvier');
    break;
    case 2 :
        console.log('mois de février');
    break;
    case 3 :
        console.log('mois de mars');
    break;
    case 4 :
        console.log('mois de avril');
    break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log('mois entre avril et décembre');
    break;
    default:
        console.log('mois de décembre');
        break;
}

//Condition ternaire
console.log(randomMonthNum%2 ==0 ? 'mois pair' : 'mois impair');

if (typeof maSuperVarQuiNexistePas == "undefined"){
    console.log('Ma var est undefined');
}
else{
    console.log('Ma var est defined');
}






