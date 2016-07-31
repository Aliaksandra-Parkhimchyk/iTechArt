(function ($) {

    $.fn.preloader = function () {

        var methods = {

            init: function () {

                $('.container').hide();

                if(this === window) {
                    $('body').append('<div id="preloader"></div>');
                    $('#preloader').append('<span class="dot dot1">.</span>');
                    $('#preloader').append('<span class="dot dot2">.</span>');
                    $('#preloader').append('<span class="dot dot3">.</span>');
                    $(this).on('load.myEvent', function () {
                        setTimeout(function () {
                            $('#preloader').fadeOut('slow');
                            $('.container').show();
                        }, 1000);
                    });
                } else {
                    $('body').append('<div id="preloader"></div>');
                    $('#preloader').append('<span class="dot dot1">.</span>');
                    $('#preloader').append('<span class="dot dot2">.</span>');
                    $('#preloader').append('<span class="dot dot3">.</span>');
                    $(this).find('img').on('load.myEvent', function () {
                        setTimeout(function () {
                            $('#preloader').fadeOut('slow');
                            $('.container').show();
                        }, 1000);
                    });
                }

                this.initialized = true;
            }
        };

        return this.each(function () {

            if (!methods.initialized) {
                methods.init.call(this);
            }

        });
    };

})(jQuery);