app.controller('OrdersCtrl', function ($rootScope, $scope, $state, $http, registered_users) {

    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/

    /*$scope.isLogin = $rootScope.isLogin;
       if(!$scope.isLogin) {
     $state.go('/login');
     }*/

    $scope.registered_users = registered_users.data;
    $scope.registered_form = [];
    $scope.isOrder = false;

    $http({
        method: 'GET',
        url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/form?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
    }).then(function successCallback(response) {
        $scope.form = response.data;
        for (var i = 0; i < $scope.form.length; i += 1) {
            if ($scope.form[i].hasOwnProperty('email') && $scope.form[i].email === $scope.registered_users[$rootScope.index].email) {
                $scope.registered_form = $scope.form[i];
                $scope.isOrder = true;
            }
        }
    }, function errorCallback(response) {
        console.log('Erorr!');
    });
});

//# sourceMappingURL=ordersCtrl-compiled.js.map