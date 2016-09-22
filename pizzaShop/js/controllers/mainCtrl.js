app.controller('MainCtrl', function ($rootScope, $scope, $state, $http, $location, loginService) {

    $rootScope.isLogin = loginService.isLogin;

    $scope.getClass = function (path) {
        return ($location.path() === path) ? 'active' : '';
    };

    $scope.logout = function () {
        $rootScope.isLogin = loginService.isLogin = false;
        localStorage.removeItem('currentUser');
        $state.go('/login');
    };

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        if (fromState.name == '/' && toState.name == '/about') {
            alert('Can\'t go from home to about!');
            event.preventDefault();
        }
    });


    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options) {

        $scope.name = localStorage.getItem('currentUser');

        alert('State changed!');

        // var currentUser = localStorage.getItem('currentUser');

        if(!$scope.name && ['/orders'].indexOf(toState.url) >= 0) {
            $state.go('/login');
        } /*else if(['/login'].indexOf(toState.url) >= 0) {
            $state.go('/');
        }*/

        if($scope.name) {
            $rootScope.isLogin = true;
        }
    });

    /*$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

        $state.go('/error');

    });*/
});