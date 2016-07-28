(function ($) {

    $.fn.select = function (options) {

        var methods = {

            init: function () {

                $(this).on('click.myEvent', function () {

                    $(this).addClass('active');

                });

                this.initialized = true;
            },

            destroy: function() {

                $(this).off('click.myEvent');

            }
        };

        var opts = $.extend({}, $.fn.select.defaults, options);

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

    $.fn.select.defaults = {};

})(jQuery);

$(document).ready(function () {

    $('.select-wrapper').select();

    /*$('.select-wrapper').select({
        destroy: true
    });*/

});