(function ($) {

    $.fn.preloader = function () {

        var methods = {

            init: function () {

                if(this === window) {
                    $(this).on('load.myEvent', function () {
                        setTimeout(function () {
                            $('#preloader').fadeOut('slow');
                        }, 5000);
                    });
                } else {
                    $(this).find('img').on('load.myEvent', function () {
                        setTimeout(function () {
                            $('.preloader').fadeOut('slow');
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