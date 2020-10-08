const person = {
    name: 'Hubert',
    surname: 'Struminski',
    age: '24',
    country: 'Poland',
    city: 'Cracow',
    showInfo: function() {
        console.log("name: " + name + ", surname: " + surname + ", age: " + age + ", country: " + country + ", city: " + city);
    },
    increaseAge: function() {
        age++;
    }
}

const person2 = {
    name: 'Hubert',
    surname: 'Struminski',
    age: '24',
    country: 'Poland',
    city: 'Cracow',
    showInfo: function() {
        console.log("name: " + name + ", surname: " + surname + ", age: " + age + ", country: " + country + ", city: " + city);
    },
    increaseAge: function() {
        age++;
    }
}

person.increaseAge();
person.increaseAge();
person.increaseAge();

person2.increaseAge();
person2.increaseAge();
