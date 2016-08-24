app.directive('myNav', function () {
    return {
        restrict: 'AEC',
        scope: {
            isLogin: '=',
            name: '=',
            logout: '&'
        },
        templateUrl: 'template/footer_nav.html',
        link: function(scope){
            scope.logout();
        }
    };
});
