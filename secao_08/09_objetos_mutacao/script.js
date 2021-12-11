let pessoa = {
    nome: 'fábio'
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: 'Marco'
}

console.log(pessoa == pessoa2);
console.log(pessoa == pessoa3);
console.log(pessoa2 == pessoa3);

pessoa2.nome = 'Pedro'

console.log(pessoa.nome);

pessoa.nome = 'Maria';

console.log(pessoa2.nome);

//Mutação > cria um objeto igual e DEIXA LINKADO, OU SEJA, MUDOU UM, MUDA O OUTRO


