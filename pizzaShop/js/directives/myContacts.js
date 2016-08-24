app.directive('myContacts', function () {
    return {
        restrict: 'AEC',
        templateUrl: 'template/item_contacts.html',
        transclude: true,
        link: function (scope, element, attrs) {
            scope.title = attrs.title;
            scope.tel1 = '(000) 777 777 7777';
            scope.tel2 = '(000) 888 888 8888';
            scope.mail1 = 'info@sitename.com';
            scope.mail2 = 'sales@sitename.com';
            scope.mail3 = 'company@sitename.com';
        }
    };
});