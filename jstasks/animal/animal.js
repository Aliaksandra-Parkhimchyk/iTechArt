function Animal(name, isHealth, isSatiety, isFatigue, speed) {

    this.name = name;

    this.isHealth = isHealth;

    this.isSatiety = isSatiety;

    this.isFatigue = isFatigue;

    this.speed = speed;

    this.eat = function () {
        console.log(this.name + " is eating!");
        this.satiety = true;
    };

    this.run = function () {
        console.log(this.name + " is running!");
    };

    this.sleep = function () {
        console.log(this.name + " is sleeping!");
    };
}

function Wolf(name, isHealth, isSatiety, isFatigue, speed) {

    Animal.call(this, name, isHealth, isSatiety, isFatigue, speed);

    this.eat = function (rabbit) {
        if (rabbit.hide) {
            console.log("I am hungry!");
        } else {
            console.log("Wolf is full! " + rabbit.name + " is very tasty!");
            this.satiety = true;
        }
    };

    this.howl = function () {
        console.log(this.name + "is howling!");
    };
}

Wolf.prototype = new Animal();
Wolf.prototype.constructor = Wolf;

function Rabbit(name, isHealth, isSatiety, isFatigue, speed, isHide) {

    Animal.call(this, name, isHealth, isSatiety, isFatigue, speed);

    this.isHide = isHide;

    this.jump = function () {
        console.log(this.name + " is jumping!");
    };
}

Rabbit.prototype = new Animal();
Rabbit.prototype.constructor = Rabbit;

var rabbit = new Rabbit("Roger", true, true, false, 100, false);
rabbit.jump();
var wolf = new Wolf("Wolf", true, false, false, 100);
wolf.eat(rabbit);

//Hamster
function Hamster(food) {

    this.food = [];

    // Это можно было не переносить в конструктор
    this.found = function (something) {
        this.food.push(something);
    };
}

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length);
console.log(lazy.food.length);


