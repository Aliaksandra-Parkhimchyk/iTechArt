app.controller('CheckinCtrl', function ($rootScope, $scope, $state, $http, loginService) {

    $scope.regexName = /^[A-z0-9]{3,20}$/;
    $scope.regexPassword = /^[A-z0-9]{3,20}$/;
    $scope.regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    $scope.regexLetters = /^[A-z]{3,20}$/;
    $scope.regexNumber = /^[0-9]*$/;

    $scope.signup = function () {
        loginService.signup($scope.name, $scope.email, $scope.phone, $scope.city, $scope.street, $scope.house, $scope.apartment, $scope.access, $scope.floor, $scope.password);
    };
});