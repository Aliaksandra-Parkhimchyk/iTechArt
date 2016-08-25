'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Yahoo = function () {
    function Yahoo(type, weather, finance) {
        _classCallCheck(this, Yahoo);

        this.type = type;
        this.weather = weather;
        this.finance = finance;
    }

    _createClass(Yahoo, [{
        key: 'blabla',
        value: function blabla() {
            var _this = this;

            if (this.weather && this.finance) {
                (function () {

                    var deferred = Q.defer();

                    $.ajax({
                        url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22minsk%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
                        success: function success(json_weather) {

                            $('<h2>').text(json_weather.query.results.channel.title).appendTo('.' + _this.type);
                            $('<h3>').text('Date: ').appendTo('.' + _this.type);
                            $('.' + _this.type).append(json_weather.query.results.channel.item.condition.date);
                            $('<h3>').text('Temperature: ').appendTo('.' + _this.type);
                            $('.' + _this.type).append(json_weather.query.results.channel.item.condition.temp);
                            deferred.resolve();
                        },

                        error: function error() {
                            deferred.reject(new myError('Incorrect url!'));
                        }
                    });

                    deferred.promise.then(function (res) {

                        $.ajax({
                            url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22USD%22%2C%22BYN%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=',
                            success: function success(json_finance) {

                                $('<h2>').text('Yahoo! Finance - Minsk, Minsk, BY').appendTo('.' + _this.type);
                                $('<h3>').text('Exchange rates: ').appendTo('.' + _this.type);
                                $('.' + _this.type).append(json_finance.query.results.quote[0].LastTradePriceOnly);
                            },

                            error: function error() {
                                // reject(new myError('Incorrect url!'));
                                console.log('Incorrect url!');
                            }
                        });
                    });
                })();
            } else if (this.weather) {

                $.ajax({
                    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22minsk%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
                    success: function success(json_weather) {

                        $('<h2>').text(json_weather.query.results.channel.title).appendTo('.' + _this.type);
                        $('<h3>').text('Date: ').appendTo('.' + _this.type);
                        $('.' + _this.type).append(json_weather.query.results.channel.item.condition.date);
                        $('<h3>').text('Temperature: ').appendTo('.' + _this.type);
                        $('.' + _this.type).append(json_weather.query.results.channel.item.condition.temp);
                    }
                });
            } else if (this.finance) {

                $.ajax({
                    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22USD%22%2C%22BYN%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=',
                    success: function success(json_finance) {

                        $('<h2>').text('Yahoo! Finance - Minsk, Minsk, BY').appendTo('.' + _this.type);
                        $('<h3>').text('Exchange rates: ').appendTo('.' + _this.type);
                        $('.' + _this.type).append(json_finance.query.results.quote[0].LastTradePriceOnly);
                    }
                });
            }
        }
    }]);

    return Yahoo;
}();

$(document).ready(function () {

    $('#weather').click(function () {
        var weather = new Yahoo('weather', true);
        weather.blabla();
    });

    $('#finance').click(function () {
        var finance = new Yahoo('finance', false, true);
        finance.blabla();
    });

    $('#total').click(function () {
        var total = new Yahoo('total', true, true);
        total.blabla();
    });
});

//# sourceMappingURL=main-compiled.js.map