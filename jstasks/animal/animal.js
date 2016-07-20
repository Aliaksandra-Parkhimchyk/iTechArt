function Animal(name, health, satiety, fatigue, speed) {

    this.name = name; 

    this.health = health;

    this.satiety = satiety;

    this.fatigue = fatigue;

    this.speed = speed;

    this.eat = function () {
        console.log(this.name +  " is eating!");
        this.satiety = true;
    };

    this.run = function () {
        console.log(this.name +  " is running!");
    };

    this.sleep = function () {
        console.log(this.name +  " is sleeping!");
    };
}


function Wolf(name, health, satiety, fatigue, speed) {

    Animal.call(this, name, health, satiety, fatigue, speed);

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
};

Wolf.prototype = new Animal();
Wolf.prototype.constructor = Wolf;

function Rabbit(name, health, satiety, fatigue, speed, hide) {

    Animal.call(this, name, health, satiety, fatigue, speed);

    this.hide = hide;

    this.jump = function () {
        console.log(this.name + " is jumping!");
    };
};

Rabbit.prototype = new Animal();
Rabbit.prototype.constructor = Rabbit;

var rabbit = new Rabbit("Roger", true, true, false, 100, false); 
rabbit.jump();
var wolf = new Wolf("Wolf", true, false, false, 100);
wolf.eat(rabbit);
