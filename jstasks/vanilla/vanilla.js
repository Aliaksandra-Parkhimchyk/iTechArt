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

//4
function func(a, b) {
    //console.log( this );
    return a + b;
}

var g = func.bind("Context");
console.log(g(1, 2));