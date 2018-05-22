// CommonJS синтаксис импорта
// т.к. код запускается из под Node.js используеся CommonJS синтаксис
// Импортируем данные из exported-module.js находящий в этой же директории

const importData = require('./exported-module'); // Default экспорт, то что экспортированно через module.exports = [any data]
console.log(importData)
const namedImport = require('./exported-module').named; // Именованный импорт, то что экспортированно через module.exports.name = [any data]
console.log(namedImport)

// Экспортировать и импортировать можно любые типы данных

// Альтернативно путям к локальным файлам можно использовать названия установленных пакетов npm
// var jQuery = require('jquery') 
// var _ = require('lodash')




// // Export ES6 / ES2015
// // NodeJS не поддерживает ES6 синтаксис модулей! (Используем его только в приложении)

// export default 1
// export default { foo: 'bar' }
// export default ['foo', 'bar']
// export default function bar () {}

// export const name = 'David'
// export var age  = 25​​
// export const myCustomFunction = () => console.log('Yay!')

// // Import ES6

// import jQuery from 'jquery' // Default импорт
// import _ from 'lodash' // Default импорт
// import * as customVariableName from './customModule' // Импорт всех именованных переменных в объект с названием customVariableName
// import { name } from './customModule' // Именованный импорт
