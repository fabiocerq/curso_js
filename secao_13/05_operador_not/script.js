const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("b"));
console.log(notab.test("ab"));
console.log(notab.test("fábio")); //não funciona pra string maior

const notAToZ = /[^a-z]/;

console.log(notAToZ.test("a"));
console.log(notAToZ.test("dsa"));
console.log(notAToZ.test("158"));
console.log(notAToZ.test("123asd")); //aceita por ter números
console.log(notAToZ.test("ashdijashhdjkhasjkdhaskjhkj5hakjhdkjsahkjdhas")); //aceita por ter 1 número

const az = /[a-z]/;

console.log(az.test("a"));
console.log(az.test("dsa"));
console.log(az.test("158"));
console.log(az.test("123asd")); //aceita por ter números
console.log(az.test("ashdijashhdjkhasjkdhaskjhkj5hakjhdkjsahkjdhas")); //aceita por ter 1 número

