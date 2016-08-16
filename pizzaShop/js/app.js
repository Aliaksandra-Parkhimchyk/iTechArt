var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {
            templateUrl: 'template/home.html',
            controller: 'HomeCtrl'
        })
        .when('/about', {
            templateUrl: 'template/about.html',
            controller: 'AboutCtrl'
        })
        .when('/delivery', {
            templateUrl: 'template/delivery.html',
            controller: 'DeliveryCtrl'
        })
        .when('/contact', {
            templateUrl: 'template/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/checkout', {
            templateUrl: 'template/checkout.html',
            controller: 'CheckoutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('MainCtrl', function ($scope, $http, $location) {
    $scope.getClass = function (path) {
        return ($location.path() === path) ? 'active' : '';
    }
});

app.controller('HomeCtrl', function ($scope, $http, $location, $q, dataHolder) {

    $scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};

    /*$q.all([
        p1,
        p2
    ]).then();

    var p = $q.defer();

    p.promise.then(function () {
        console.log('resolved');
    });

    p.resolve();*/


    /*$scope.ingridientsChosen = {};

    setTimeout(function () {
        $scope.$apply(function () {
            $scope.ingridientsChosen.beaf = true;
        });
    }, 3000);

    $scope.$watch('search', function () {
        console.log($scope.search);
    });

    $scope.$watchCollection('ingridientsChosen', function () {
        console.log('asdas', $scope.ingridientsChosen);
    });*/

    $http.get('products.json').success(function (data) {
        $scope.products = data;

        $scope.from = (function () {
            var minPrice = 100;
            for (var i = 0; i < $scope.products.length; i += 1) {
                if ($scope.products[i].price < minPrice) {
                    minPrice = $scope.products[i].price;
                }
            }
            return minPrice;
        })();

        $scope.to = (function () {
            var maxPrice = 0;
            for (var i = 0; i < $scope.products.length; i += 1) {
                if ($scope.products[i].price > maxPrice) {
                    maxPrice = $scope.products[i].price;
                }
            }
            return maxPrice;
        })();
    });

    /*setTimeout(function () {
        $scope.to = 10000;
    }, 5000);*/

    //$scope.carts = [];

    /*$scope.addItem = function (item) {

        $scope.carts.push({
            title: item.title,
            size: item.size,
            price: item.price
        });
    };*/

    /*$scope.removeItem = function (carts, item) {
        carts.splice(item, 1);
    };*/

    /*$scope.total = function () {
        var total = 0;
        angular.forEach($scope.carts, function (item) {
            total += item.price;
        });
        return total;
    };*/

    $scope.carts = dataHolder.getCarts();

    $scope.addItem = function (item) {
        dataHolder.addItem(item);
    };

    $scope.removeItem = function (item) {
        dataHolder.removeItem($scope.carts, item);
    };

    $scope.total = function () {
        return dataHolder.total();
    };

    $scope.filterPrice = function (minPrice, maxPrice) {

        /*if(minPrice < 0 || maxPrice < 0) {
            alert('Invalid price!!!');
        }*/

        return function (item) {
            var res = true;
            if (!(item.price >= minPrice && item.price <= maxPrice)) {
                res = false;
            }
            return res;
        };
    };

    $scope.filterIngridients = function (obj) {

        return function (item) {
            var res = true;
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop) && obj[prop] && item.ingridients.indexOf(prop) < 0) {
                    res = false;
                }
            }
            return res;
        };
    };

});

app.controller('AboutCtrl', function ($scope) {
    $scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};
});

app.controller('DeliveryCtrl', function ($scope) {
    $scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};
});

app.controller('ContactCtrl', function ($scope) {

    $scope.regexName = /^[A-Za-z0-9 ]{3,20}$/;
    $scope.regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    $scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};
});

app.controller('CheckoutCtrl', function ($scope, dataHolder) {

    $scope.regexName = /^[A-Za-z0-9]{3,20}$/;
    $scope.regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.regexLetters = /^[A-z]{3,20}$/;
    $scope.regexNumber = /^[0-9]*$/;

    $scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};

    $scope.carts = dataHolder.getCarts();

    $scope.addItem = function (item) {
        dataHolder.addItem(item);
    };

    $scope.removeItem = function (item) {
        dataHolder.removeItem($scope.carts, item);
    };

    $scope.total = function () {
        return dataHolder.total();
    };
});

app.factory('dataHolder', function () {

    var carts = [];

    return {

        getCarts: function() {
            return carts;
        },

        addItem: function (item) {

            var nums = item.num || 1;

            carts.push({
                title: item.title,
                size: item.size,
                price: item.price,
                num : nums
            });
        },

        removeItem: function (carts, item) {
            carts.splice(item, 1);
        },

        total: function () {
            var total = 0;
            angular.forEach(carts, function (item) {
                total += item.price * item.num;
            });
            return total;
        }
    }
});


