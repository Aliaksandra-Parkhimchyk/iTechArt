(function( $ ) {
    $.fn.showMore = function() {

        return this.each(function () {

            var status = 'less';

            var text = $('p').html();
            $('p').html(text.substr(0, 500));

            $(this).click(function () {
                if (status === 'less') {
                    $('p').html(text);
                    $(this).html('Show less');
                    status = 'more';
                } else if (status === 'more') {
                    $('p').html(text.substr(0, 500));
                    $(this).html('Show more');
                    status = 'less'
                }
            });
        });
    };
})(jQuery);

$(document).ready(function () {
    $('#showMore').showMore();
});