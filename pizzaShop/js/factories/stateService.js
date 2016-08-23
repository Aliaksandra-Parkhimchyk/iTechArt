app.factory('stateService', function ($http) {

    var carts = [];
    /*var forms = [];*/

    function findById(source, id) {
        for (var i = 0; i < source.length; i++) {
            if (source[i].id === id) {
                return source[i];
            }
        }
    }

    return {

        getCarts: function () {
            return carts;
        },

        addItem: function (item) {

            /*var nums = item.num || 1;*/

            var obj = findById(carts, item.id);

            if (carts.length === 0 || !obj) {

                carts.push({
                    title: item.title,
                    size: item.size,
                    price: item.price,
                    num: item.num,
                    id: item.id
                });

            } else {
                obj.num = item.num;
            }
        },

        removeItem: function (carts, item) {
            carts.splice(item, 1);
        },

        getTotal: function () {
            var total = 0;
            angular.forEach(carts, function (item) {
                total += item.price * item.num;
            });
            return total;
        },

        send: function (name, email, phone, city, street, house, apartment) {

            $http({
                method: 'POST',
                url: 'https://api.mlab.com/api/1/databases/pizzashop/collections/form?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_',
                data: [{
                    name: name,
                    email: email,
                    phone: phone,
                    city: city,
                    street: street,
                    house: house,
                    apartment: apartment,
                    date: new Date,
                    orders: this.getCarts()
                }]
            }).then(function successCallback(response) {
                carts = [];
            }, function errorCallback(response) {
            });
        }
    }
});