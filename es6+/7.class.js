// ES5 Class (как было раньше)

function Person(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
}

// Prototype, чтобы при создании экземпляра каждый раз не создавался новый метод а брался по цепочки наследования prototype chain
Person.prototype.incrementAge = function () {
    return this.age += 1;
}

console.log(new Person())





// // ES6 Class, новый синтаксис объявления классов (является просто синтаксическим сахаром)

class Person {
    constructor(name, age, gender) {
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }
    
    incrementAge() {
      this.age += 1;
    }
}

console.log(new Person())



// // Наследование ES6

class Animal {
    constructor(name) {
        this.name = name;
        this.voice = 'Silent...'
    }

    makeSound(name) {
        console.log(this.voice)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
        this.voice = 'Meow'
    }
}

const cat = new Cat('Kitty');

console.log(cat.name)
cat.makeSound();