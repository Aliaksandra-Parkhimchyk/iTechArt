(function( $ ) {
    $.fn.myPlugin = function() {

        return this.each(function () {

            var status = 'less';

            var text = $('p').html();
            $('p').html(text.substr(0, 500));
            $('button').html('Show more');

            $('button').click(function () {

                if (status === 'less') {
                    $('p').html(text);
                    $('button').html('Show less');
                    status = 'more';
                } else if (status === 'more') {
                    $('p').html(text.substr(0, 500));
                    $('button').html('Show more');
                    status = 'less'
                }
            });
        });
    };
})(jQuery);

$(document).ready(function () {
    $('button').myPlugin();
});