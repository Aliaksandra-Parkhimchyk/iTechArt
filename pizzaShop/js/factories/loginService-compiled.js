app.factory('loginService', function ($rootScope, $http, $state) {

    var registered_users = [];
    $rootScope.isLogin = false;
    $rootScope.isRegistration = false;
    $rootScope.index;

    return {

        login: function (name, password) {

            /*var self = this;*/

            $http({
                method: 'GET',
                url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/registered_users?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
            }).then(function successCallback(response) {
                registered_users = response.data;
                for (var i = 0; i < registered_users.length; i += 1) {
                    if (registered_users[i].hasOwnProperty('name') && registered_users[i].name === name && registered_users[i].hasOwnProperty('password') && registered_users[i].password === password) {
                        $rootScope.isRegistration = true;
                        $rootScope.index = i;
                    }
                }
                if ($rootScope.isRegistration) {
                    $state.go('/orders');
                    $rootScope.isLogin = true;
                    localStorage.setItem('currentUser', name);
                } else {
                    alert('Invalid username or password!');
                }
            }, function errorCallback(response) {
                console.log('Erorr!');
            });
        },

        signup: function (name, email, phone, city, street, house, apartment, access, floor, password) {

            $http({
                method: 'POST',
                url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/registered_users?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_',
                data: [{
                    name: name,
                    email: email,
                    phone: phone,
                    city: city,
                    street: street,
                    house: house,
                    apartment: apartment,
                    access: access,
                    floor: floor,
                    password: password
                }]
            }).then(function successCallback(response) {
                $rootScope.isLogin = true;
            }, function errorCallback(response) {});
        },

        getUsers: function () {

            return $http({
                method: 'GET',
                url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/registered_users?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
            });
        }
    };
});

//# sourceMappingURL=loginService-compiled.js.map