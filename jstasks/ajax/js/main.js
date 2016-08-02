$('#weather').click(function () {
    $.ajax({
        url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22minsk%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
        success: function (json_weather) {

            // console.log(json_weather);
            $('<h2>').text(json_weather.query.results.channel.title).appendTo('.weather');
            $('<h3>').text('Date: ').appendTo('.weather');
            $('.weather').append(json_weather.query.results.channel.item.condition.date);
            $('<h3>').text('Temperature: ').appendTo('.weather');
            $('.weather').append(json_weather.query.results.channel.item.condition.temp);
        }
    });
});

/*minsk-834463
milan-718345
new-york-2459115
london-44418
paris-615702
chicago-2379574*/

$('#finance').click(function () {
    $.ajax({
        url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22USD%22%2C%22BYN%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=',
        success: function (json_finance) {

            // console.log(json_finance);
            $('<h2>').text('Yahoo! Finance - Minsk, Minsk, BY').appendTo('.finance');
            // $('<h3>').text('Date: ').appendTo('.finance');
            $('<h3>').text('Exchange rates: ').appendTo('.finance');
            $('.finance').append(json_finance.query.results.quote[0].LastTradePriceOnly);
        }
    });
});

$('#total').click(function () {

    $.ajax({
        url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22minsk%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
        success: function (json_weather) {

            $('<h2>').text(json_weather.query.results.channel.title).appendTo('.total');
            $('<h3>').text('Date: ').appendTo('.total');
            $('.total').append(json_weather.query.results.channel.item.condition.date);
            $('<h3>').text('Temperature: ').appendTo('.total');
            $('.total').append(json_weather.query.results.channel.item.condition.temp);
        }
    });

    $.ajax({
        url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22USD%22%2C%22BYN%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=',
        success: function (json_finance) {
            
            $('<h2>').text('Yahoo! Finance - Minsk, Minsk, BY').appendTo('.total');
            // $('<h3>').text('Date: ').appendTo('.finance');
            $('<h3>').text('Exchange rates: ').appendTo('.total');
            $('.total').append(json_finance.query.results.quote[0].LastTradePriceOnly);
        }
    });
});
