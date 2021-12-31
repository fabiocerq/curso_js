const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataNasc.test("18/04/1993"));
console.log(validarDataNasc.test("18/4/1993"));
console.log(validarDataNasc.test("118/04/1993"));
console.log(validarDataNasc.test("18/04/13"));
console.log(validarDataNasc.test("18-04-1993"));
console.log(validarDataNasc.test("18/04/93"));
console.log(validarDataNasc.test("99/99/9999")); //brecha do regex que reconhece apenas padrões

const validarDataNasc2 = /[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/;

console.log("------");
console.log(validarDataNasc2.test("18/04/1993"));
console.log(validarDataNasc2.test("18/4/1993"));
console.log(validarDataNasc2.test("118/04/1993"));
console.log(validarDataNasc2.test("18/04/13"));
console.log(validarDataNasc2.test("18-04-1993"));
console.log(validarDataNasc2.test("18/04/93"));
console.log(validarDataNasc2.test("99/99/9999"));