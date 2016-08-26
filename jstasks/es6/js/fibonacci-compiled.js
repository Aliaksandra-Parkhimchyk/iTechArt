"use strict";

var _marked = [fibonacci].map(regeneratorRuntime.mark);

function fibonacci() {
    var fn1, fn2, current;
    return regeneratorRuntime.wrap(function fibonacci$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    fn1 = 1;
                    fn2 = 1;

                case 2:
                    if (!true) {
                        _context.next = 10;
                        break;
                    }

                    current = fn2;

                    fn2 = fn1;
                    fn1 = fn1 + current;
                    _context.next = 8;
                    return current;

                case 8:
                    _context.next = 2;
                    break;

                case 10:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var generator = fibonacci();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//# sourceMappingURL=fibonacci-compiled.js.map