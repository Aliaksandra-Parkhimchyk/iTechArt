app.controller('OrdersCtrl', function ($rootScope, $scope, $state, $http, loginService) {

    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/

    /*$scope.isLogin = $rootScope.isLogin;

     if(!$scope.isLogin) {
     $state.go('/login');
     }*/

    $http({
        method: 'GET',
        url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/form?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
    }).then(function successCallback(response) {
        $scope.form = response.data;
    }, function errorCallback(response) {
        console.log('Erorr!');
    });
});