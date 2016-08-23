app.controller('ContactCtrl', function ($scope) {

    $scope.regexName = /^[A-z0-9]{3,20}$/;
    $scope.regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    /*$scope.templates = {name: 'item_contacts.html', url: 'template/item_contacts.html'};*/
});
