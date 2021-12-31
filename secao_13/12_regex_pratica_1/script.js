const validarDominio = /[?www.]\w+\.com.br|.com/;
//como www não é obrigatório, foi colocado como opcional

console.log(validarDominio.test("www.google.com.br"));
console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.360engenharia.com.br"))
console.log(validarDominio.test("www.360engenharia.br"))
console.log(validarDominio.test("360engenharia.com.br"))