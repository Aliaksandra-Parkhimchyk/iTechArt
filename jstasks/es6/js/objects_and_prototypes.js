'use strict';

// 1
let name = "Вася";
let isAdmin = true;

let user1 = {
    name,
    isAdmin
};
console.log(JSON.stringify(user1));

// 2
let propName = "firstName";

let user2 = {
    [propName]: "Вася"
};

console.log(user2.firstName);

// 3
let a = "Мой ";
let b = "Зелёный ";
let c = "Крокодил";

let user3 = {
    [(a + b + c).toLowerCase()]: "Вася"
};

console.log(user3["мой зелёный крокодил"]);