(function ($) {

    $.fn.preloader = function (options) {

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
                            $('.container').show('slow');
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
                            $('.container').show('slow');
                        }, 1000);
                    });
                }

                this.initialized = true;
            },

            destroy: function() {

                $(this).off('load.myEvent');
                $(this).find('img').off('load.myEvent');

            }
        };

        var opts = $.extend({}, $.fn.preloader.defaults, options);

        return this.each(function () {

            if (!methods.initialized) {
                methods.init.call(this);
            }

            if (opts) {

                if (opts.destroy) {
                    methods.destroy.call(this);
                }
            }
        });
    };

    $.fn.preloader.defaults = {};

})(jQuery);