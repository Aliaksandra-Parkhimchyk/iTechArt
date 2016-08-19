var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

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
        .when('/orders', {
            templateUrl: 'template/orders.html',
            controller: 'OrdersCtrl'
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

app.controller('HomeCtrl', function ($scope, $http, $location, $q, stateService) {

    $scope.regexPrice = /^[0-9]*$/;
    $scope.regexSearch = /^[A-z0-9]{0,20}$/;

    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/

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

    $http({
        method: 'GET',
        url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/products?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
    }).then(function successCallback(response) {

        $scope.products = response.data;
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
    }, function errorCallback(response) {
        console.log('Erorr!');
    });

    /*setTimeout(function () {
     $scope.to = 10000;
     }, 5000);*/

    $scope.carts = stateService.getCarts();

    $scope.addItem = function (item) {
        stateService.addItem(item);
    };

    $scope.removeItem = function (item) {
        stateService.removeItem($scope.carts, item);
    };

    $scope.getTotal = function () {
        return stateService.getTotal();
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

    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function (fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    };
});

app.controller('AboutCtrl', function ($scope) {
    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/
});

app.controller('DeliveryCtrl', function ($scope) {
    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/
});

app.controller('ContactCtrl', function ($scope) {

    $scope.regexName = /^[A-z0-9]{3,20}$/;
    $scope.regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/
});

app.controller('CheckoutCtrl', function ($scope, stateService) {

    $scope.regexName = /^[A-z0-9]{3,20}$/;
    $scope.regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    $scope.regexLetters = /^[A-z]{3,20}$/;
    $scope.regexNumber = /^[0-9]*$/;

    $scope.isHide = false;

    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/

    $scope.carts = stateService.getCarts();

    $scope.addItem = function (item) {
        stateService.addItem(item);
    };

    $scope.removeItem = function (item) {
        stateService.removeItem($scope.carts, item);
    };

    $scope.getTotal = function () {
        return stateService.getTotal();
    };

    $scope.send = function () {
        stateService.send($scope.name, $scope.email, $scope.phone, $scope.city, $scope.street, $scope.house, $scope.apartment);
        $scope.isHide = true;
    };
});

app.controller('OrdersCtrl', function ($scope, $http) {

    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/

    $http({
        method: 'GET',
        url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/form?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
    }).then(function successCallback(response) {
        $scope.form = response.data;
    }, function errorCallback(response) {
        console.log('Erorr!');
    });
});

app.factory('stateService', function ($http) {

    var carts = [];
    var forms = [];

    function findById(source, id) {
        for (var i = 0; i < source.length; i++) {
            if (source[i].id === id) {
                return source[i];
            }
        }
    }

    return {

        getCarts: function () {
            return carts;
        },

        addItem: function (item) {

            /*var nums = item.num || 1;*/

            var obj = findById(carts, item.id);

            if (carts.length === 0 || !obj) {

                carts.push({
                    title: item.title,
                    size: item.size,
                    price: item.price,
                    num: item.num,
                    id: item.id
                });

            } else {
                obj.num = item.num;
            }
        },

        removeItem: function (carts, item) {
            carts.splice(item, 1);
        },

        getTotal: function () {
            var total = 0;
            angular.forEach(carts, function (item) {
                total += item.price * item.num;
            });
            return total;
        },

        send: function (name, email, phone, city, street, house, apartment) {

            $http({
                method: 'POST',
                url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/form?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_',
                data: [{
                    name: name,
                    email: email,
                    phone: phone,
                    city: city,
                    street: street,
                    house: house,
                    apartment: apartment,
                    date: new Date,
                    orders: this.getCarts()
                }]
            }).then(function successCallback(response) {
                carts = [];
            }, function errorCallback(response) {
            });
        }
    }
});

app.directive('myContacts', function () {
    return {
        restrict: 'AEC',
        templateUrl: 'template/item_contacts.html',
        transclude: true,
        link: function (scope, el, attrs) {
            scope.title = attrs.title;
            scope.tel1 = '(000) 777 777 7777';
            scope.tel2 = '(000) 888 888 8888';
            scope.mail1 = 'info@sitename.com';
            scope.mail2 = 'sales@sitename.com';
            scope.mail3 = 'company@sitename.com';
        }
    };
});

//9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_
