alert("press the icon");
$(function(){
    $("#imagen").click(function(){
        clickh();
        window.navigator.vibrate(1000);
    });
});
function clickh(){
    var x=document.getElementById("mus");
    x.play();
    x.volume=.50;
}