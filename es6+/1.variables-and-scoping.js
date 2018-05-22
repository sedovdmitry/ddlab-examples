// 1. var vs. let / const

var catStatus = 'Голодный';

function getFood(food) {
    if(food) {
        var catStatus = 'Сытый';

        return catStatus;
    }

    return catStatus;
}

console.log(getFood(false)); // ?

// В ES5 область видимость в js - функция
// Объявление var в отличие от let / const будет поднятно вверх области видимости

// У let / const - область видимости - любой блок. Поднятие переменных не происходит.

// const нельзя присвоить значение.
// если const - объект, то все еще можно переопределять свойста этого объекта. Константой является только ссылка на переменную

// Для создания объекта-константы обычно используется Object.freeze(). 








// // 2. Block scoping in js

// {
//     var variable = 2;
// }

// console.log(variable);