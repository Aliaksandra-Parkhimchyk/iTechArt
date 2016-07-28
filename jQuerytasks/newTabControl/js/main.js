(function ($) {

    $.fn.tabControl = function (options) {

        var methods = {

            init: function () {

                var self = this;

                this.$tabs = $(this);
                this.$tabNavItems = this.$tabs.find('.tab-nav li');
                this.$tabContentItems = this.$tabs.find('.tab-container');

                this.$tabNavItems.on('click.myEvent', function () {

                    methods.showPage.call(self, $(this).index());

                    if(opts.callback){
                        opts.callback();
                    }
                });

                this.initialized = true;
            },

            showPage: function (i) {
                this.$tabNavItems.removeClass('active');
                this.$tabNavItems.eq(i).addClass('active');

                this.$tabContentItems.hide();
                this.$tabContentItems.eq(i).show();
            },

            destroy: function() {

                this.$tabNavItems.off('click.myEvent');

                this.$tabs = null;
                this.$tabNavItems = null;
                this.$tabContentItems = null;
            }
        };

        var opts = $.extend({}, $.fn.tabControl.defaults, options);

        return this.each(function () {

            if (!methods.initialized) {
                methods.init.call(this);
            }

            if (opts) {

                if (opts.showPage) {
                    methods.showPage.call(this, opts.showPage);
                }

                if (opts.destroy) {
                    methods.destroy.call(this);
                }
            }
        });
    };

    $.fn.tabControl.defaults = {
        activeTab: 0,
        activeClass: 'active',
        callback: null
    };

})(jQuery);

$(document).on('click.myEvent', 'button', function () {

    $('.tab').tabControl({
        showPage: 4
    });
});

$(document).ready(function () {

    $('.tabs').tabControl();

    $('.tabs').tabControl({
        showPage: 3
    });

    $('.tabs').eq(0).tabControl({
        callback: function() {
            console.log('Click on 1');
        }
    });

    $('.tabs').eq(1).tabControl({
        callback: function() {
            console.log('Click on 2');
        }
    });

    $('.tabs').eq(1).tabControl({
        destroy: true
    });
});