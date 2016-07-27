(function( $ ) {
    $.fn.timer = function() {

        return this.each(function () {
            
            dateEnd = new Date();
            dateEnd = new Date(dateEnd.getFullYear() + 1, 0, 1);

            setInterval(function () {
                now = new Date();
                now = Math.floor((dateEnd - now) / 1000);
                sec = now % 60;
                now = Math.floor(now / 60);
                if (sec < 10) {
                    sec = '0' + sec;
                }
                min = now % 60;
                now = Math.floor(now / 60);
                if (min < 10) {
                    min = '0' + min;
                }
                hour = now % 24;
                now = Math.floor(now / 24);
                $('#timer').html('До Нового года осталось: ' + now + " дней " + hour + " часов " + min + " минут " + sec + " секунд");
            }, 1000);
        });
    };
})(jQuery);

$(document).ready(function () {
    $('#timer').timer();
});