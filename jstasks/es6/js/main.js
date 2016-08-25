'use strict';

class Yahoo {

    constructor (type, weather, finance) {
        this.type = type;
        this.weather = weather;
        this.finance = finance;
    }

    blabla() {

        if (this.weather && this.finance) {

            let deferred = Q.defer();

            $.ajax({
                url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22minsk%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
                success: json_weather => {

                    $('<h2>').text(json_weather.query.results.channel.title).appendTo(`.${this.type}`);
                    $('<h3>').text('Date: ').appendTo(`.${this.type}`);
                    $(`.${this.type}`).append(json_weather.query.results.channel.item.condition.date);
                    $('<h3>').text('Temperature: ').appendTo(`.${this.type}`);
                    $(`.${this.type}`).append(json_weather.query.results.channel.item.condition.temp);
                    deferred.resolve();

                },

                error: () => {
                    deferred.reject(new myError('Incorrect url!'));
                }
            });

            deferred.promise.then(res => {

                $.ajax({
                    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22USD%22%2C%22BYN%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=',
                    success: json_finance => {

                        $('<h2>').text('Yahoo! Finance - Minsk, Minsk, BY').appendTo(`.${this.type}`);
                        $('<h3>').text('Exchange rates: ').appendTo(`.${this.type}`);
                        $(`.${this.type}`).append(json_finance.query.results.quote[0].LastTradePriceOnly);
                    },

                    error: () => {
                        // reject(new myError('Incorrect url!'));
                        console.log('Incorrect url!');
                    }
                });
            });

        } else if (this.weather) {

            $.ajax({
                url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22minsk%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
                success: json_weather => {

                    $('<h2>').text(json_weather.query.results.channel.title).appendTo(`.${this.type}`);
                    $('<h3>').text('Date: ').appendTo(`.${this.type}`);
                    $(`.${this.type}`).append(json_weather.query.results.channel.item.condition.date);
                    $('<h3>').text('Temperature: ').appendTo(`.${this.type}`);
                    $(`.${this.type}`).append(json_weather.query.results.channel.item.condition.temp);
                }
            });
        } else if (this.finance) {

            $.ajax({
                url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22USD%22%2C%22BYN%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=',
                success: json_finance => {

                    $('<h2>').text('Yahoo! Finance - Minsk, Minsk, BY').appendTo(`.${this.type}`);
                    $('<h3>').text('Exchange rates: ').appendTo(`.${this.type}`);
                    $(`.${this.type}`).append(json_finance.query.results.quote[0].LastTradePriceOnly);
                }
            });
        }
    }
}

$(document).ready(() => {

    $('#weather').click(() => {
        let weather = new Yahoo('weather', true);
        weather.blabla();
    });

    $('#finance').click(() => {
        let finance = new Yahoo('finance', false, true);
        finance.blabla();
    });

    $('#total').click(() => {
        let total = new Yahoo('total', true, true);
        total.blabla();
    });
});
