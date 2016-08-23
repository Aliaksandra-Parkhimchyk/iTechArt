app.controller('CheckoutCtrl', function ($scope, stateService) {

    $scope.regexName = /^[A-z0-9]{3,20}$/;
    $scope.regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    $scope.regexLetters = /^[A-z]{3,20}$/;
    $scope.regexNumber = /^[0-9]*$/;

    $scope.isHide = false;

    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/

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

    $scope.send = function () {
        stateService.send($scope.name, $scope.email, $scope.phone, $scope.city, $scope.street, $scope.house, $scope.apartment);
        $scope.isHide = true;
    };
});