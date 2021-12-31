const dia = /\d\d/; //testa se há 2 números

console.log(dia.test("2019")); //erro: tem 2 números > se tem 4, tem 2 
console.log(dia.test("2019" && "2019".length)); //compara quant de dígitos 
console.log(dia.test("asd"));
console.log(dia.test("05"));

const palavrasTresLetras = /\w\w\w/;

console.log(palavrasTresLetras.test("asd"));
console.log(palavrasTresLetras.test("asdd")); //erro: tem 3 letras > se tem 4, tem 3 
console.log(palavrasTresLetras.test("as"));


