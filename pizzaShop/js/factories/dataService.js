/*app.factory('dataService', function ($rootScope, $http) {

    $rootScope.products = [];

    $http({
        method: 'GET',
        url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/products?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
    }).then(function successCallback(response) {

        $rootScope.products = response.data;

    }, function errorCallback(response) {
        console.log('Erorr!');
    });

    return {

        getProducts: function () {

            return $rootScope.products;
        }
    }
});*/
