// Все символы уникальны

const symOne = Symbol();
const symTwo = Symbol();

console.log(symOne === symTwo)




// Можно использовать для доступа к свойствам объектов

const key = Symbol('Custom symbol description');

const object = {
    [key]: 'Property value'
};

console.log(key)
console.log(object[key])

