const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIP.test('128.1.1.1'))
console.log(validarIP.test('128.1.1'))
console.log(validarIP.test('1.1.1.1'))
console.log(validarIP.test('1.1'))
console.log(validarIP.test('1as'))