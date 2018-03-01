/**
 * Created by demo on 1/02/18.
 */
$(document).ready(function(){


    $('h1')
        // .html('titre tout le premier')
        // .css('background','red')
        .addClass('newClass')
        .removeClass('newClass')
        .on('click',function(){
            $(this).toggleClass('red')
        })
        .on('mouseover',function(){
            console.log('hover');
            $(this).css('background','blue')
                .css({'background':'red','border':"3 px solid black" })
        }

        )
                // .next('h1')
        //     .css('background','blue')
    ;

    $('li>img').on('click',function(e){ //On écoute le click sur li>img

        var imgTarget = $(e.target).data('target'); //Je get la valeur de data-target de l'élément cliqué

        $('#big').fadeOut(200,function(){ //Je cache la grande image
            $(this)
                .attr('src',imgTarget) //Quand elle est cachée je change son src
                .fadeIn(200) // Puis je la réaffiche
            ;

        })
    });
});