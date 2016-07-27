(function ($) {
    $.fn.tabControl = function (opts) {

        // var defaults = {};
        // var options = {};

        return this.each(function () {
            var tabs = this;
            $tabs = $(tabs);

            if (!tabs.initialized) {

                tabs.$tabs = $(tabs);
                tabs.$tabNavItems = tabs.$tabs.find('.tab-nav li');
                tabs.$tabContentItems = tabs.$tabs.find('.tab-container');

                // showPage(0);

                // tabs.$tabNavItems.each(function (i) {
                //     $(this).click(function () {
                //         showPage(i);
                //     });
                // });

                tabs.$tabNavItems.click(function () {
                    console.log($(this).index());
                    showPage($(this).index());

                });

                tabs.initialized = true;
            }

            function showPage(i) {
                tabs.$tabNavItems.removeClass('active');
                tabs.$tabNavItems.eq(i).addClass('active');

                tabs.$tabContentItems.hide();
                tabs.$tabContentItems.eq(i).show();
            }

            if (opts) {

                if (opts.showpage) {
                    showPage(opts.showpage);
                }

                if (opts.showpageonclick) {
                    $('button').click(function () {

                        showPage(opts.showpageonclick);

                    });
                }
            }
        });
    };
})(jQuery);


$(document).ready(function () {
    $('.tabs').tabControl();

    $('.tabs').tabControl({
        showpage: 2,
        showpageonclick: 1
    });
});