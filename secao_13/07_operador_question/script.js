const padrao = /Abacax?i/;
//faz com que o x seja opcional para o reconhecimento de padrão

console.log(padrao.test("Abacaxi"))
console.log(padrao.test("Abacai"))

const padrao2 = /\d+\w?/;
//número obrigatório, mas alfanumérico opcional

console.log(padrao2.test("2123"))
console.log(padrao2.test("2123aaa"))
console.log(padrao2.test("2123 "))