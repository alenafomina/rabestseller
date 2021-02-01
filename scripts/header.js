(function() {
    var video = document.getElementById("header__video");
    var delayMillis = 1000;
    video.volume = 0;

    setTimeout(function() {
        video.play();
    }, delayMillis);
})()

