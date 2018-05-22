var user = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    father: 'Vader'
}

var { firstName, father } = user; // Создаются переменных с таким же названием как ключ объекта
console.log(firstName); // 'jedi'
console.log(father); // 'anakin'



var { firstName: customName } = user; // Можно переопределить название переменной которая будет создана через ":"
console.log(customName)




function getFirstName({ firstName }) { // Можно использовать в аргументах функции
    return firstName;
}

console.log(getFirstName(user))




// Деструктурирующее присваивание так же работает с массивами

const [first, second] = [1, 2];
console.log(first, second)

// Можно использовать дефолтным значением, если элемента не будет в массиве
const [exist, notExist = 'Значение если элемента не окажется'] = [1];
console.log(exist, notExist)

// Можно использовать в сочетании с rest оператором из следующего примера
const [one, two, ...arrayWithRestItems] = [1, 2, 3, 4, 5];
console.log(one, two, arrayWithRestItems)