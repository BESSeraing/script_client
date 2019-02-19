//Attendre la disponibilité du dom
// Peut s'écrire en raccourci $(function(){

var score = 0;
$(document).ready(function(){
    getWelcomeMessage();
});


function getWelcomeMessage(){
    $.ajax({
        type: "GET",
        data: {score: score},
        url: "http://localhost:4100/getScores.php",
        success: function(response){
           console.log(response);
          // response = JSON.parse(response); //Si le php ne précise pas le content type JSON
           console.log(response[0]);
           console.log(response[0].nom);
           console.log(response[0].score);
        },
        error: function(errorResponse, textStatus, errorThrown){
            console.log(errorResponse.status);
            console.log(textStatus);
            console.log(errorThrown);
            var statusCode = errorResponse.status;
            $('#welcome').html("une erreur s'est produite ("+ statusCode +")");
        }
    });
}