function* fibonacci() {
    var fn1 = 1;
    var fn2 = 1;
    while (true) {
        var current = fn2;
        fn2 = fn1;
        fn1 = fn1 + current;
        yield current;
    }
}

var generator = fibonacci();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);