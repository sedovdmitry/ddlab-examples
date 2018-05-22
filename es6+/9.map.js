// Коллекция Map

let map = new Map();

map.set('key', 'value');
map.set('key2', 'value2');

console.log(map.get('key')); // value
console.log(map.has('key')); // true
console.log(map.keys())


// Ключем может быть любой объект.

const keyFunction = () => 'Ключем является сама функция а не строка';
map.set(keyFunction, 'value')
console.log(map.get(keyFunction))


// Entries

console.log(map.entries())
for(let [key, value] of map.entries()) { // Сочетание с деструктурирующим присваиваием
    console.log(key, value)
}
