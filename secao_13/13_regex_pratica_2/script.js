const validarEmail = /\w+@\w+.\w+/;

console.log(validarEmail.test("fabiodrumesa@gmail.com"));
console.log(validarEmail.test("fabiocerq.esa@hotmail.com"));
console.log(validarEmail.test("marcao_1986@gmail.com"))
console.log(validarEmail.test("fabiodrumesa@gmail.com.br"))
console.log(validarEmail.test("fabiodrumesagmail.com"))
console.log(validarEmail.test("gmail.com"))
