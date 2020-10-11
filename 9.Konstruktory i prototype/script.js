//Zadanie 1
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    this.changeAge = function(newAge) {
        this.age = newAge;
    }
    this.changeCity = function(newCity) {
        this.city = newCity;
    }
}

let person1 = new Person('Hubert', 'Struminski', 24, 'Poland', 'Cracow', 'Polish');
let person2 = new Person('Maciek', 'Nowak', 12, 'England', 'Londyn', 'English');
let person3 = new Person('Joanna', 'Paczek', 36, 'Germany', 'Berlin', 'German');
let person4 = new Person('Anna', 'Kasia', 21, 'Russia', 'Moscow', 'Polish');
let person5 = new Person('John', 'Smith', 27, 'USA', 'New York', 'English');

person1.changeAge(30);
person1.changeCity('Warsaw');

person2.changeAge(13);
person2.changeCity('Manchester');

person3.changeAge(37);
person3.changeCity('Dortmund');

person4.changeAge(22);
person4.changeCity('Katyn');

person5.changeAge(28);
person5.changeCity('Los Angeles');

//Zadanie 2
function Calculator() {
    this.number1 = 0;
    this.number2 = 0;
    this.memory = [];
    this.add = function(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;

        const result = this.number1 + this.number2;
        this.memory.push({operation: 'add', number1: this.number1, number2: this.number2, result: result});
    }
    this.sub = function(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;

        const result = this.number1 - this.number2;
        this.memory.push({operation: 'sub', number1: this.number1, number2: this.number2, result: result});
    }
    this.multiply = function(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;

        const result = this.number1 * this.number2;
        this.memory.push({operation: 'multiply', number1: this.number1, number2: this.number2, result: result});
    }
    this.division = function(num1, num2) {
        if(num2 === 0) {
            console.log("Division not allowed.");
            return;
        }
        this.number1 = num1;
        this.number2 = num2;

        
        const result = this.number1 / this.number2;
        this.memory.push({operation: 'division', number1: this.number1, number2: this.number2, result: result});
    }
    this.clearMemory = function() {
        this.memory = [];
    }
    this.toString = function() {
        this.memory.forEach(element => {
            if(element.operation === 'add') {
                console.log(element.operation + ": " + element.number1 + " + " + element.number2 + " = " + element.result);
            } else if(element.operation === 'sub') {
                console.log(element.operation + ": " + element.number1 + " - " + element.number2 + " = " + element.result);
            } else if(element.operation === 'multiply') {
                console.log(element.operation + ": " + element.number1 + " * " + element.number2 + " = " + element.result);
            } else {
                console.log(element.operation + ": " + element.number1 + " / " + element.number2 + " = " + element.result);
            }
        });
    }
}

let calculator1 = new Calculator();
calculator1.add(7, 11);
calculator1.sub(1, 4);
calculator1.multiply(3, 4);
calculator1.division(5, 5);
calculator1.toString();

let calculator2 = new Calculator();
calculator2.add(3, 1);
calculator2.sub(5, 2);
calculator2.multiply(6, 8);
calculator2.division(10, 1);
calculator2.toString();

var interval = null;

//Zadanie 3
class Game {
    constructor() {
        this.number = 0;
    }
    checkNumber(interval) {
        if(this.number > 5) {
            clearInterval(interval);
        }
    }
    randomNumber() {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        this.number = randomNumber;

        console.log(this.number);
        clearInterval(interval);
        interval = setInterval(this.randomNumber.bind(this), 1000);
        this.checkNumber(interval);
    }
}

let game = new Game();
game.randomNumber();
let game2 = new Game();
game2.checkNumber();







