const reg1 = new RegExp('bola'); //regex em formato de objeto

console.log(reg1.test("Tem bola?")) //test procura se as condições foram atendidas, ou seja, ter a string "bola"
console.log(reg1.test("Não tem"))

const reg2 = /bola/;

let text = "tem bola na cesta";

console.log(reg2.test("Tem bola?")) //test procura se as condições foram atendidas, ou seja, ter a string "bola"
console.log(reg2.test("Não tem"))
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado?"))
console.log(/quadrado/.test("1246541516465865quadrado4144684651234"))