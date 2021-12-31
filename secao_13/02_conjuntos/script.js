const reg1 = /[12345]/;

console.log(reg1.test('o número 6 está presente'))
console.log(reg1.test('o número 2 está presente'))
console.log(reg1.test('o número 23 está presente')) //erro: dá true pq ele conta o 2 do 23
console.log(reg1.test('o número 61 está presente')) //erro: dá true pq ele conta o 1 do 61

const reg2 = /[0-9]/; //essa regex testa se existe números de forma geral

console.log(reg2.test('o número 350 está presente')) 


