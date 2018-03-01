/**
 * Created by demo on 8/02/18.
 */
var correctAnswers = ['r1','r4','r8'];

$(function(){
    stylise();
    $('.reponse').hide();

    $('a').hover(
        function(){
            testAnswers();
        },
        function(){
            console.log('hideAll')
            $('.question img').attr('src','question.png');
            $('.question .reponse').hide();
        });
});

function stylise(){
    $('.question').css(
        {
            'background':"#00ccef",
            'border':"3px solid black",
            'position':'relative',
            'padding' : '10px',
            'margin' : '0 0px 20px 0'
        })
        .find('.texte')
            .css({
                'width':"80%"
            })
        .next('img')
            .css({
                'position':'absolute',
                'right':'10px',
                'top':'10px'
            })
    ;
}


function testAnswers(){
    console.log('testing');
    $('.reponse').show();
    $('.question').each(function(){

        var checkedId = $(this).find('input:checked').attr('id');

        //Default values, on va considérer que c'est faux de base
        var imgSrc = "img/wrong.png";
        var responseColor = 'red';

        if (correctAnswers.indexOf(checkedId) != -1){
            imgSrc = "img/correct.png";
            responseColor = 'green';
        }


        $(this).find('img')
            // .prop('data-source',$(this).attr('src'))
                .attr('src',imgSrc);
        $(this).find('.reponse').css('color',responseColor);




    });
}

