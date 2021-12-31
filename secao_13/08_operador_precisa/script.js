const cep = /\d{5}-\d{3}/;
//o formato deve ser obedecido, se não dará false

console.log(cep.test("40155-250"))
console.log(cep.test("401-250"))
console.log(cep.test("fábopo-250"))
console.log(cep.test("40155-25"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;
//como parêntesis é caracter especial, a contra barra é necessária pra skipar o parêntesis

console.log(tel.test("(71)3333-1707"))
console.log(tel.test("(71)98887-1145"))
console.log(tel.test("(071)98887-1145"))
console.log(tel.test("(71)887-1145"))
console.log(tel.test("(71)98887-115"))