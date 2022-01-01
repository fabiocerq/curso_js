const validarID = /\d+ID/;

console.log(validarID.test("1545"))
console.log(validarID.test("1545I"))
console.log(validarID.test("ID"))
console.log(validarID.test("abcID"))
console.log(validarID.test("1545ID"))