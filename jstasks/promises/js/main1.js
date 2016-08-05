(function () {

    var getZip = function (addr) {

        var deferred1 = Q.defer();

        setTimeout(function () {
            console.log('1');
            deferred1.resolve(Math.random() * 1000);
        }, Math.random() * 1000 + 1000);

        return deferred1.promise;
    };

    var getStores = function (zip) {

        var deferred2 = Q.defer();

        setTimeout(function () {
            console.log('2');
            deferred2.resolve({
                store1: "1_" + zip,
                store2: "2_" + zip,
                store3: "3_" + zip
            });
        }, Math.random() * 1000 + 4000);

        return deferred2.promise;
    };

    var render = function (stores) {
        console.log('3');
        console.log(stores);
    };

    var addr1 = "blabla 1";
    var addr2 = "lollol 2";

    // Параллельное выполнение
    /*Q.all([
        getZip(addr1),
        getStores(addr1)
    ]).then(function (res) {
        render(res);
    }).catch(function () {
        console.log('Erorr!');
    });*/

    // Последовательное выполнение
    getZip(addr1).then(getStores).then(function (res) {
        render(res)
    }).catch(function () {
        console.log('Error!');
    });

    /*var operations = [getZip, getStores, render];

    var result = Q(addr1);

    operations.forEach(function (f) {
        result = result.then(f);
    });

    return result.catch(function () {
        console.log('Erorr!');
    });*/

})();
