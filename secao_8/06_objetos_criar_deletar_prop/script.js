let pessoa = {
    nome: 'Fábio',
    idade: 28,
    profissao: 'Analista de processo'
}

console.log(pessoa.nome);

delete pessoa.nome; //deletando propriedades
console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false; //criando propriedades

console.log(pessoa.casado);
