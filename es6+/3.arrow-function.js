// Arrow function

function x(x) {
    return x * x;
}

const x1 = (x) => {
    return x * x;
};
const x2 = (x) => x * x; // Можно опустить тело функции, тогда стрелочная функция будет возвращать значение после знака "=>"
const x3 = x => x * x; // Если аргумент - один, можно опустить скобки аргументов

console.log(x3(2))








// var materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];
  
// console.log(materials.map(item => item.length)); // Часто используется как callback из-за удобной записи





// Стрелочные функции в отличии от обычных - не сохраняют this

// var myObject = {
//     baseNumber: 2,

//     getRandom: function() {
//         return this.baseNumber;
//     },
    
//     getRandomArrow: () => {
//         return this.baseNumber;
//     }
// }


// myObject.getRandom()

// Все еще можно воспользоваться методами call, apply, bind для привязки this