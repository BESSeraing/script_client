//Attendre la disponibilité du dom
// Peut s'écrire en raccourci $(function(){
$(document).ready(function(){
    addClassExemple();
    createBody();
    checkboxExemple();
    fadeExemple();
    styleIt();
    loopIt();
    positionIt();

});

function positionIt(){
    console.log('position de la boule rouge en left : ' +$('#ptitBoulRouge').position().left);
    console.log('position de la boule rouge en top : ' +$('#ptitBoulRouge').position().top);
    console.log('offset de la boule rouge en left : ' +$('#ptitBoulRouge').offset().left);
    console.log('offset de la boule rouge en top : ' +$('#ptitBoulRouge').offset().top);
}

function loopIt(){
    $('.menuLi').each(function(index,elem){  //Boucle sur tous les éléments contenus dans le selecteur
        //Premier argument : itération, deuxième: element courant
        $(elem).html("menu n°"+index);
    })
}


function styleIt(){
    $('#mainMenu')
        .css("margin-top","100px")
        .css({
            "margin-bottom":"100px",
            "text-transform":"uppercase"
            })
        .css('background-color',"#00FF99") //On "chaîne", ça veut dire qu'on peut appeller plusieurs methodes à la suite sue le même object
    ;

    console.log($('#mainMenu').html());
}

function fadeExemple(){
    $('.fadeIn').fadeIn(10000,function(){
        $(this).slideUp(1000);
    });
}


function checkboxExemple(){
    var id = $('input[type=checkbox]:checked')
        .addClass('soChecked')
        .attr('id');
    console.log("la checkbox checkée a l'id :"+id);
}


function createBody(){
    var mainObject = $('<div id="main"></div>');
    mainObject.html("ceci est de l'html");
    $('header').after(mainObject); //On insère l'object après le <header>
}


function addClassExemple(){
    //Sélecteur jQuery
    var links = $('a');
    links.addClass('superLink');
}



/*
//Façon de faire sans jQuery
var nativeLinks = document.getElementsByTagName('a');
for(var i = 0;i<nativeLinks.length;i++){
    nativeLinks[i].className += " superLink2";
}
*/


