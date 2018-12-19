$(document).ready(function(){
    var i = 1;
    var j = 1;
    setInterval(function() {

                i += 1;
                j += 1
                //alert(i);
                $('.ksc').css('background-position' , i + "px " + j + "px");
        $('.ksp').css('background-position' , "-" + i + "px " + "-" + j + "px");

    }, 5);
});


$(function() {
    $("a").click(function(){
        $('.set').slideToggle();
    });
});

function readURL(event){
    var getImagePath = URL.createObjectURL(event.target.files[0]);
    $('.ksc').css('background-image', 'url(' + getImagePath + ')');
};


function toggleFullScreen(elem) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
