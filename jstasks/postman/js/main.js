var myModule = (function (opts) {

    $.ajax({
        url: /*'https://api.mlab.com/api/1/databases/pizzashop/collections/blabla?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'*/$('input').val(),
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(JSON.parse($('textarea').val())),
        dataType: 'json'
    });
});

$(document).ready(function () {

    $('#request').click(function () {
        myModule();
    });
});

