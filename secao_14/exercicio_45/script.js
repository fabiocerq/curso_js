const validarNome = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNome.test("Fabio_Drummond28"))
console.log(validarNome.test("Fabio-Drummond28"))
console.log(validarNome.test("Fabio_Drummond1257"))
console.log(validarNome.test("Fa"))
