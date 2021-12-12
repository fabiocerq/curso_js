//objeto a partir de outro objeto > o base será o prototype
//herdará tudo vindo do objeto base e do Object do js

const pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

console.log('------');

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty('maos'));
console.log(Object.getPrototypeOf(pessoaNova) === pessoa); //pessoa é prototype de pessoaNova
