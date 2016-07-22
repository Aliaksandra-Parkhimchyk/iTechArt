//2
function makeCounter() {

    var currentCount = 1;

    return function () {
        return currentCount++;
    };
}

var counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

//3
function borrowMethod1(number) {

    var str = '' + number;

    var strSplit = str.split('');

    return strSplit.join('#');
}

console.log(borrowMethod1(123));

function borrowMethod2() {

    arguments.join = [].join;

    return arguments.join(';;');
}

console.log(borrowMethod2(1, 2, 3, 4));

//4
function func(a, b) {
    //console.log( this );
    return a + b;
}

var g = func.bind('Context');
console.log(g(1, 2));