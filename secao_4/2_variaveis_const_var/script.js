//const nunca se altera
//let valor pode variar, inclusive seu tipo
//Antes do JS6, delcaração era feito com var, mas não é mais usado

var nome = "Fábio";
const ip = "127.0.0.1";

console.log(nome);
console.log(ip);
console.log("Tentando mudar IP");
ip = "128.1.2.1";
console.log(ip); //não funciona, ip é const, logo não muda valor