/**
 * Created by demo on 11/01/18.
 */


document.addEventListener('keydown',function(e){
    console.log(e.keyCode);
    if (e.keyCode == 32){
        document.querySelector('body').style = "background:red;";
    }else if (e.keyCode == 13){
        document.querySelector('body').style = "background:white;";
    }

});