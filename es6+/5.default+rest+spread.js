// 1. Default params

// function addTwoNumbers(x, y) {
//     x = x || 0;
//     y = y || 0;
//     return x + y;
// }

// function addTwoNumbers2(x = 0, y = 0) {
//     return x + y;
// }




// 2. Rest operator

// function hasZero(...array) {
//     return array.some(x => x === 0);
// }

// console.log(hasZero(1, 2, 3, 4, 6))





// 3. Spread operator

// var arr = [1, ...[2, 3], 4];

// console.log(arr)

// var baseObject = {
//     username: 'Fedor',
//     registered: new Date()
// }

// var midexObject = {
//     ...baseObject,
//     admin: true
// }

// console.log(midexObject)


// Rest - собирает элементы в новый массив
// Spread - вытаскивает элементы из массива / объекта