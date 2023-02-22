$(document).ready(function() {

    $('.logo').hover(function(){

        $(this).addClass('logo-com-realce');
    },
    function(){
        $(this).removeClass('logo-com-realce');
    });


    $('.card-sem-realce').hover(function(){

        $(this).addClass('card-com-realce');
    },
    function(){
        $(this).removeClass('card-com-realce');
    });

});