app.controller('MainCtrl', function ($rootScope, $scope, $state, $http, $location, loginService) {

    $rootScope.isLogin = loginService.isLogin;

    $scope.getClass = function (path) {
        return ($location.path() === path) ? 'active' : '';
    };

    $scope.logout = function () {
        $rootScope.isLogin = loginService.isLogin = false;
        $state.go('/login');
    };

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options) {

        var currentUser = sessionStorage.getItem('currentUser');

        if(!currentUser && ['/orders'].indexOf(toState.url) >= 0) {
            $state.go('/login');
        }
    });
});