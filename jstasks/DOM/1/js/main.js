//1
window.addEventListener('load', function () {
//window.onload = function () {

    var sec = 0;
    var min = 0;
    var hour = 0;

    var element = document.getElementsByTagName('div')[0];

    var interval = setInterval(function () {

        sec += 1;

        if (sec === 60) {
            sec = 0;
            min += 1;
        } else if (min === 60) {
            min = 0;
            hour += 1;
        }

        if (sec < 10) {
            brS = ':0';
        } else {
            brS = ':';
        }

        if (min < 10) {
            brM = ':0';
        } else {
            brM = ':';
        }

        if (hour < 10) {
            brH = '0';
        }

        element.innerHTML = brH + hour + brM + min + brS + sec;

        if (hour === 0 && min === 1 && sec === 10) {
            clearInterval(interval);
            alert('Time is up!');
        }
    }, 1000);
//}
});
