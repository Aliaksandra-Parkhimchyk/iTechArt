(function ($) {

    $.fn.zoom = function (options) {

        var methods = {

            init: function () {

                $(this).hover(function () {
                        $(this).find('img').animate(0, function () {
                                $('.zoom img').attr({src: $('.zoom img').attr('next-url')});
                            }).animate(0);
                    },

                    function () {
                        $(this).find('img').animate(0, function () {
                                $('.zoom img').attr({src: $('.zoom img').attr('preview-url')}).css({margin: '0'});
                            }).animate(0);
                    }
                );

                var coef = $('.preload img').width() / $('.zoom img').width();

                $(this).on('mousemove.myEvent', function (e) {
                    var pX = e.pageX - $(this).offset().left;
                    var pY = e.pageY - $(this).offset().top;

                    var x = pX * coef - pX;
                    var y = pY * coef - pY;

                    $('.zoom img').css({margin: "-" + y + "px -" + x + "px"});

                });

                this.initialized = true;
            },

            destroy: function() {

                $(this).off('mousemove.myEvent');

            }
        };

        var opts = $.extend({}, $.fn.zoom.defaults, options);

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

    $.fn.zoom.defaults = {};

})(jQuery);

