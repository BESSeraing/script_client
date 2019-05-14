$(document).ready(function() {
     var posX = Math.floor(Math.random() * (500));
     var posY = Math.floor(Math.random() * (500));
     
     var tour = $('#tourelle');
     var targer = $('.target');
     
     $('.target').css({top: posY + "px",left:posX+"px"});
     
     var a = targer.position().left - tour.position().left ;
     var o = targer.position().top - tour.position().top;
     console.log("a = "+a);
     console.log("o = "+o);
     
     var angleRad = Math.atan2(o,a);
     console.log("angle rad : "+angleRad);
     var angleDeg = angleRad * 180 / Math.PI;
     angleDeg += 90;
     console.log("angle deg : "+angleDeg);
     
     tour.css({'-webkit-transform' : 'rotate('+ angleDeg +'deg)',
          '-moz-transform' : 'rotate('+ angleDeg +'deg)',
          '-ms-transform' : 'rotate('+ angleDeg +'deg)',
          'transform' : 'rotate('+ angleDeg +'deg)'});
});