/*app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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
 }]);*/

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    /*$locationProvider.html5Mode({
     enabled: true,
     requireBase: false
     });*/

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('/', {
            url: '/',
            resolve: {
                products: function (dataService) {
                    return dataService.getProducts();
                }
                /*blabla: function() {
                    return 1;
                }*/
            },
            templateUrl: 'template/home.html',
            controller: 'HomeCtrl'
        })
        .state('/about', {
            url: '/about',
            templateUrl: 'template/about.html',
            controller: 'AboutCtrl'
        })
        .state('/delivery', {
            url: '/delivery',
            templateUrl: 'template/delivery.html',
            controller: 'DeliveryCtrl'
        })
        .state('/contact', {
            url: '/contact',
            templateUrl: 'template/contact.html',
            controller: 'ContactCtrl'
        })
        .state('/checkout', {
            url: '/checkout',
            templateUrl: 'template/checkout.html',
            controller: 'CheckoutCtrl'
        })
        .state('/orders', {
            url: '/orders',
            templateUrl: 'template/orders.html',
            controller: 'OrdersCtrl'
        })
        .state('/login', {
            url: '/login',
            templateUrl: 'template/login.html',
            controller: 'LoginCtrl'
        })
        .state('/logout', {
            url: '/logout',
            templateUrl: 'template/logout.html',
            controller: 'LogoutCtrl'
        })
        .state('/error', {
            url: '/error',
            templateUrl: 'template/error.html'
        });
});
