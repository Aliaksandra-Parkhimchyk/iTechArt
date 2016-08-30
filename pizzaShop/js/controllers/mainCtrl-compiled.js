app.controller('MainCtrl', function ($rootScope, $scope, $state, $http, $location, loginService) {

    $rootScope.isLogin = loginService.isLogin;

    $scope.name = localStorage.getItem('currentUser');

    $scope.getClass = function (path) {
        return $location.path() === path ? 'active' : '';
    };

    $scope.logout = function () {
        $rootScope.isLogin = loginService.isLogin = false;
        localStorage.removeItem('currentUser');
        $state.go('/login');
    };

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {

        var currentUser = localStorage.getItem('currentUser');

        if (!currentUser && ['/orders'].indexOf(toState.url) >= 0) {
            $state.go('/login');
        } /*else if(['/login'].indexOf(toState.url) >= 0) {
            $state.go('/');
          }*/

        if (currentUser) {
            $rootScope.isLogin = true;
        }
    });

    /*$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
          $state.go('/error');
      });*/
});

//# sourceMappingURL=mainCtrl-compiled.js.map