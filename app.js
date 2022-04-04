$(document).ready(function(){
    $('#intro').fadeIn(1);
});

function slidetransition(slide) {
var shownow = document.getElementById(slide);
var currentpg = "";

$(".visChk").each( function(){
    if($(this).is(':visible')){
        currentpg= $(this).attr("id");
    }
});

currentpg = document.getElementById(currentpg);

switch(shownow){
    case home:
        $(currentpg).slideUp(200, function() {
            $(shownow).show(200);
        });
        break;
    case proj:
        $(currentpg).slideUp(200, function() {
            $(shownow).show(200);
        });
        break;
    case contact:
        $(currentpg).slideUp(200, function() {
            $(shownow).show(200);
        });
        break;
    default:
        currentpg.style.display = "none";
        shownow.style.display = "inline";
    }
}
