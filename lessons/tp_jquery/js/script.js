//Attendre le DOM
$(function() {
    styleIt();
    testing();
});

function testing(){
    $('a').on("click",testResponse);
}


function testResponse(e){
    e.preventDefault();
    var responsesId = $("#r1, #r4, #r8");

    responsesId.each(function(index,element){
        var imageUrl = "images/mauvais.png";
        var reponseColor = "red";

        if ($(element).is(':checked')){
            imageUrl = "images/bon.png";
            reponseColor = "green";
        }

        $(element)
            .parents(".question")
            .find('img')
            .attr('src',imageUrl)
        ;

        $(element)
            .parents(".question")
            .find('.reponse')
            .show()
            .css('color',reponseColor)
        ;

    })
}




function styleIt(){
    $('.question')
        .css({
            background: "cyan",
            border: "1px solid black",
            margin: "20px 0",
            position:"relative",
            padding: "20px 10px"
        })
        .find('img')
        .css({position:"absolute",'right':"20px",'top':"20%"});

    $('.reponse').hide();


    $('.texte')
        .css({
            width: "80%"
        })
}