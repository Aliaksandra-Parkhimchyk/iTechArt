(function ($) {

    $.fn.preloader = function (options) {

        var methods = {

            init: function () {

                var self = this;

                if (this === window) {

                    $('.container').hide(); //Several containers will be hidden

                    methods.addPreloader.call(this);

                    $(this).on('load.myEvent', function () { //.pluginName instead .myEvent
                        setTimeout(function () {
                            $('.preloader').fadeOut('slow'); //Several preloaders will be hidden
                            $('.container').show('slow'); //Several containers will be shown
                        }, 1000);
                    });
                } else {

                    this.imgs = $(this).find('img');
                    this.imgsQantity = this.imgs.length;
                    this.imgsLoaded = 0;

                    this.imgs.hide();

                    methods.addPreloader.call(this);

                    this.imgs.each(function(){

                        var oldImageSrc = $(this).attr('src');
                        var newImage = new Image();

                        $(newImage).on('load.myEvent', function () {
                            self.imgsLoaded++;

                            if (self.imgsLoaded === self.imgsQantity) {
                                setTimeout(function () {
                                    $('.preloader').fadeOut('slow'); //all preloaders fade out
                                    self.imgs.show('slow');
                                }, 1000);
                            }
                        }).attr('src', oldImageSrc);

                    });
                }

                this.initialized = true;
            },

            addPreloader: function () {
                var $el;

                if (this === window) {
                    $el = $('body');
                } else {
                    $el = $(this);
                }

                $el.append('<div class="preloader"><span class="dot dot1">.</span>' +
                    '<span class="dot dot2">.</span>' +
                    '<span class="dot dot3">.</span>' +
                    '</div>');
            },

            destroy: function () {

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