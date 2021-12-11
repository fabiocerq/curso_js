function recursao(n) {
    if (n - 1 < 2) {
        console.log("Recursão parou")
    } else if (n % 2 != 0) {
        console.log("Número impar " + n)
        recursao(n - 1);
    } else {
        console.log("Número par " + n)
        recursao(n - 2);
    }
}

recursao(39);
console.log('-------')
recursao(10);
console.log('-------')
recursao(25);
console.log('-------')

//loop disfarçado > na recursão, a função se invoca continuamente até esbarrar
//no limite delimitado, contudo é de difícil leitura e percepção, além de falhar em testes grandes