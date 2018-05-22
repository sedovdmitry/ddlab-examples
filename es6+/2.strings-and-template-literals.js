// String.prototype.includes

console.log('foo bar baz'.includes('fozo'))

// String.prototype.repeat

console.log('1'.repeat(15))

// String.prototype.startsWith

console.log('foo bar baz'.startsWith('foo'))



// String template literal

let doubleQuote = "Строка с \"двойными\" кавычками";
let singleQuote = 'Или с \'одинарными\' кавычкам';

let templateLiteral = `
    Строка в "любыми" 'кавычками'
    Еще и многострочная
    И с возможностью интерполяции переменных: "${doubleQuote}"
`;


console.log(templateLiteral)