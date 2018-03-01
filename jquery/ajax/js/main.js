/**
 * Created by demo on 22/02/18.
 */
$(function(){
    simpleAjaxCall();
    buttonListener();
});

function simpleAjaxCall(){
    $.ajax({
        url: "http://localhost:4100/ajax/simple.php",//
        type: 'GET',
        data: {},
        success: function(response){
            $('#simpleAjax').html(response);
        }
    });
}


function buttonListener(){
    $('#call').on('click',function(){
        simpleAjaxCall();
    });
}

function buttonAjaxCall(){
    $.ajax({
        url: "http://localhost:4100/ajax/index.php",//
        type: 'POST',
        data: {player: "Jonathan", score: "999999999999999999999999999"},
        success: function(response){
            // response = JSON.parse(response); //N'est la que pour si la directive content-type n'est pas bonne côté server
            console.log(response);
            for (var i = 0; i<response.length; i++){
                $('#ajaxResponse').append("<p>"+response[i].player+" : "+response[i].score+"</p>");
            }
        }

    });
}
