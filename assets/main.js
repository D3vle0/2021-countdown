const countDownDate = new Date("January 1, 2021 00:00:00").getTime()
const x = setInterval(function () {
    var time = new Date().getTime();
    var timeleft = countDownDate - time;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // var wait = 0;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("counter").innerHTML = '<div class="box time">' + days + '</div><div class="box time">' + hours + '</div><div class="box time">' + minutes + '</div><div class="box time">' + seconds + '</div>';
    console.log(timeleft);
    if (days == 0 && hours == 0 && minutes == 0 && seconds == 46) {
        wait = 1;
        var audio = new Audio("../assets/R3HAB x Mike Williams - Lullaby (Official Video).mp3")
        audio.volume = 0.4;
        audio.play();
    }
    // else if (days == 0 && hours == 0 && minutes == 0 && seconds < 46) {
    //     if (wait == 0) {
    //         var audio = new Audio("../assets/lullaby.mp3")
    //         audio.volume = 0.03;
    //         audio.currentTime = 46 - seconds;
    //         audio.play()
    //         wait = 1;
    //     }
    // }
    else if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = '<div class="fin-txt"><strong>Happy new year!</strong></div>';
    }
    else if (timeleft <= 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = '<div class="fin-txt"><strong>Happy new year!</strong></div>';
    }
}, 1000);