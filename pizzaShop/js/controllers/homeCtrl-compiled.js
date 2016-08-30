app.controller('HomeCtrl', function ($rootScope, $scope, $state, $http, stateService, products, registered_users) {

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

    $scope.products = products.data;

    /*setTimeout(function () {
     $scope.to = 10000;
     }, 5000);*/

    $scope.registered_users = registered_users.data;

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {

        if ($rootScope.isRegistration) {
            $rootScope.name = $scope.registered_users[$rootScope.index].name;
            $rootScope.email = $scope.registered_users[$rootScope.index].email;
            $rootScope.phone = $scope.registered_users[$rootScope.index].phone;
            $rootScope.city = $scope.registered_users[$rootScope.index].city;
            $rootScope.street = $scope.registered_users[$rootScope.index].street;
            $rootScope.house = $scope.registered_users[$rootScope.index].house;
            $rootScope.apartment = $scope.registered_users[$rootScope.index].apartment;
            $rootScope.access = $scope.registered_users[$rootScope.index].access;
            $rootScope.floor = $scope.registered_users[$rootScope.index].floor;
        }
    });

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

    var deferred = Q.defer();

    /*$scope.from = (function () {
        var minPrice = 100;
        for (var i = 0; i < $scope.products.length; i += 1) {
            if ($scope.products[i].price < minPrice) {
                minPrice = $scope.products[i].price;
                deferred.resolve();
            }
        }
        return minPrice;
    })();
      $scope.to = (function () {
        var maxPrice = 0;
        for (var i = 0; i < $scope.products.length; i += 1) {
            if ($scope.products[i].price > maxPrice) {
                maxPrice = $scope.products[i].price;
                deferred.resolve();
            }
        }
        return maxPrice;
    })();
      deferred.promise.then(function (res) {
          $scope.filterPrice = function (minPrice, maxPrice) {
              /!*if(minPrice < 0 || maxPrice < 0) {
             alert('Invalid price!!!');
             }*!/
              return function (item) {
                var res = true;
                if (!(item.price >= minPrice && item.price <= maxPrice)) {
                    res = false;
                }
                return res;
            };
        };
    });*/

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

//# sourceMappingURL=homeCtrl-compiled.js.map