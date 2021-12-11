let frase = "Testando o método split"
console.log(frase.split(" "));

let palavras = frase.split(" "); //como o separador da string desejada é espaço em branco, ele deve ser usado como parâmetro
console.log(palavras);

let produtos = 'Banana;Maça;Pizza;Yogurt;Celular'

console.log(produtos.split(";")); //como o separador é ; deve ser inserido como parâmetro

//split divide array com base no parâmetro entregue