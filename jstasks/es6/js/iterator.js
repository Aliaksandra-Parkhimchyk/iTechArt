'use strict';

// 1
let arr = [1, 2, 3];

/*for (let value of arr) {
    console.log(value);
}*/
console.log(...arr);


// 2
/*for (let char of "Привет") {
    console.log(char);
}*/
console.log(...'Привет');


// 3
let range = {
    from: 1,
    to: 5
};

// сделаем объект range итерируемым
range[Symbol.iterator] = function() {

    let current = this.from;
    let last = this.to;

    // метод должен вернуть объект с методом next()
    return {
        next() {
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

    }
};

/*for (let num of range) {
    console.log(num);
}*/
console.log(...range);


// 4
let str = "Hello";

let iterator = str[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}