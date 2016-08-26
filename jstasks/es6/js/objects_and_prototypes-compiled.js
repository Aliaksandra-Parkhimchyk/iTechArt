'use strict';

// 1

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = "Вася";
var isAdmin = true;

var user1 = {
    name: name,
    isAdmin: isAdmin
};
console.log(JSON.stringify(user1));

// 2
var propName = "firstName";

var user2 = _defineProperty({}, propName, "Вася");

console.log(user2.firstName);

// 3
var a = "Мой ";
var b = "Зелёный ";
var c = "Крокодил";

var user3 = _defineProperty({}, (a + b + c).toLowerCase(), "Вася");

console.log(user3["мой зелёный крокодил"]);

//# sourceMappingURL=objects_and_prototypes-compiled.js.map