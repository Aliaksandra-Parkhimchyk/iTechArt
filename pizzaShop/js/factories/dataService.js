app.factory('dataService', function ($http) {

    return {

        getProducts: function () {

            return $http({
                method: 'GET',
                url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/products?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
            });
        }
    }
});

/*$http({
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
 });*/
