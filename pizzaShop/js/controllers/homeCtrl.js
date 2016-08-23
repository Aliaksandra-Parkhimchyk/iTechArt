app.controller('HomeCtrl', function ($scope, $http, $location, $q, stateService, blabla) {

    console.log(blabla);

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