//objeto 'pai' do js > qqer objeto criado será 'filho' dele
//se um objeto não tem uma propriedade pedida, ele puxa do prototype
//todo objeto craido do zero terá como prototype o Object do js, que tem os métodos nativos do js

const pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));
//o método hasOwnProperty é um método do Object (objeto primordial do js)
//portanto, qunado o objeto pessoa foi criado, herdou o método
//porque todo objeto criado do zero é tem o Object como prototype
 



