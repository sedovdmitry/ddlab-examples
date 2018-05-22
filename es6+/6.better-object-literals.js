// Методы

var myObject = {
    myFunc: function() {
        console.log(1)
    },

    myShortFunc() {
        console.log(123)
    }
}

// Вычисляемые ключи свойств

const keyName = () => 'name';
const anotherKey = 'isAdmin';

var myObject = {
    [keyName()]: 'Fedor',
    [anotherKey]: true
}

console.log(myObject)

// Сокращения, можно опустить присваивание через ":" если имя переменной совпадает с ключем объекта

function createCarObject(brand, color) {
	return {
		brand,
	};
}

console.log(createCarObject('ayay', 'red'))

// Getter : Setter

var customProp = 2;

const myObj = {
    get name() {
        return customProp;
    },

    set name(value) { // Своя логика для установки значения
        console.log(value)
        customProp = value;
    }
}

myObj.name = 15

console.log(myObj.name)

// Геттеры / сеттеры так же доступны свойств классов
