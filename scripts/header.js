var video = document.getElementById("header__video");
var delayMillis = 4000;
video.volume = 0;

setTimeout(function() {
    video.play();
}, delayMillis);

