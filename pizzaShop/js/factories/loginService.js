app.factory('loginService', function ($rootScope, $http, $state) {

    var users = [];
    $rootScope.isLogin = false;

    return {

        login: function (name, password) {

            /*var self = this;*/

            $http({
                method: 'GET',
                url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/users?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
            }).then(function successCallback(response) {
                users = response.data;
                if (users[0].name === name && users[0].password === password) {
                    $state.go('/orders');
                    $rootScope.isLogin = true;
                    sessionStorage.setItem('currentUser', name);
                } else {
                    alert('Invalid username or password!');
                }
            }, function errorCallback(response) {
                console.log('Erorr!');
            });
        }
    }
});