
$(window).on('load',function() {

    show($('.slide.active'));
    $('.btn').on('click',function(e){

        var slideSelector = $(e.target).attr('href');
        console.log(slideSelector);
        show($(slideSelector));
        hide($(e.target).closest('.slide'));

    });
})


function hide($element){
    $element
        .toggleClass("active")
        .animate({opacity:0},200,function(){
            $element.css('display','none');
        });
}

function show($element){
    $element

        .toggleClass('active')
        .css({display:"block",left:"50%"})
        //.fadeIn(10)
      .animate({opacity:100,left:0},2000)
    ;
}