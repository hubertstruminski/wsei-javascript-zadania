//Zadanie 1
class Person {
    constructor(name, surname, age, country, city) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.country = country;
        this.city = city;
    }

    getInfo() {
        console.log("name: " + this.name + ", surname: " + this.surname + ", age: " + this.age + ", country: " + this.country + ", city: " + this.city);
    }

    increaseAge() {
        this.age++;
    }
}

const person1 = new Person('Hubert', 'Strumiński', 24, 'Poland', 'Cracow');
const person2 = new Person('Maciek', 'Kowalski', 31, 'Poland', 'Warsaw');

person1.increaseAge();
person1.increaseAge();

person2.increaseAge();
person2.increaseAge();
person2.increaseAge();

//Zadanie 2
Person.prototype.favoriteFoods = [];
Person.prototype.showFavoriteFoods = function() {
    for(let i=0; i<this.favoriteFoods.length; i++) {
        console.log(this.favoriteFoods[i]);
    }
}

Person.prototype.addFoods = function(newFood) {
    this.favoriteFoods.push(newFood);
}

person1.favoriteFoods = [];
person1.addFoods('Spaghetti');
person1.addFoods('Potatoes');

person2.favoriteFoods = [];
person2.addFoods('Tomatoes');
person2.addFoods('Banana');
person2.addFoods('Strawberries');

person1.showFavoriteFoods();
person2.showFavoriteFoods();

//Zadanie 3
class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.result = 0;
    }
    save(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        if(this.b === 0) {
            console.log('You can not divide by zero.');
            return;
        }
        return this.a / this.b;
    }
}

//Zadanie 4
const ladder = {
    currentStep: 0,
    maxStepNumber: 10,
    minStepNumber: 0
}

function up(ladder) {
    if(ladder.currentStep === ladder.maxStepNumber) {
        console.log("I can't go up.");
        return;
    } 
    ladder.currentStep++;
}

function down(ladder) {
    if(ladder.currentStep === ladder.minStepNumber) {
        console.log("I can't go down.");
        return;
    }
    ladder.currentStep--;
}

function getCurrentHeightInLadder(ladder) {
    console.log("I'm at position: " + ladder.currentStep + " in the ladder.");
}

up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
down(ladder);
down(ladder);
down(ladder);
getCurrentHeightInLadder(ladder);