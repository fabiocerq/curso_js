let calculadora = {

    soma: function (a, b) {
        return a + b;
    },
    subtracao: function (a, b) {
        return a - b;
    },
    divisao: function (a, b) {
        return a / b;
    },
    multiplicacao: function (a, b) {
        return a * b;
    }

}

console.log(calculadora.soma(1, 3));
console.log(calculadora.subtracao(5, 7));
console.log(calculadora.divisao(10, 2.2));
console.log(calculadora.multiplicacao(8, 8));
