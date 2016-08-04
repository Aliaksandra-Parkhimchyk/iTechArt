(function () {

    var res = [];

    var getZip = function (addr, cb) {
        setTimeout(function () {
            cb(Math.random() * 1000);
        }, Math.random() * 1000 + 5000);
    };

    var getStores = function (zip, cb) {
        setTimeout(function () {
            cb({
                    store1: "1_" + zip,
                    store2: "2_" + zip,
                    store3: "3_" + zip
                });
        }, Math.random() * 1000 + 5000);
    };

    var render = function (stores) {
        res.push(stores);
        console.log(stores);
    };

    var addr1 = "blabla 1";
    var addr2 = "lollol 2";

    getZip(addr1, function (r1) {
        getStores(r1, function (r2) {
            render(r2);
        });
    });

    getZip(addr2, function (r1) {
        getStores(r1, function (r2) {
            render(r2);
        });
    });

    console.log(res);

})();



