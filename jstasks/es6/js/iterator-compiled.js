'use strict';

// 1

var _console, _console2, _console3;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var arr = [1, 2, 3];

/*for (let value of arr) {
    console.log(value);
}*/
(_console = console).log.apply(_console, arr);

// 2
/*for (let char of "Привет") {
    console.log(char);
}*/
(_console2 = console).log.apply(_console2, _toConsumableArray('Привет'));

// 3
var range = {
    from: 1,
    to: 5
};

// сделаем объект range итерируемым
range[Symbol.iterator] = function () {

    var current = this.from;
    var last = this.to;

    // метод должен вернуть объект с методом next()
    return {
        next: function next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
};

/*for (let num of range) {
    console.log(num);
}*/
(_console3 = console).log.apply(_console3, _toConsumableArray(range));

// 4
var str = "Hello";

var iterator = str[Symbol.iterator]();

while (true) {
    var result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

//# sourceMappingURL=iterator-compiled.js.map