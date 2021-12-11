let pessoa = {
    "nome" : "Fábio",
    "idade" : 28,
    "profissao" : "Analista de Processos",
    "hobbies" : ["patinar","video game","tomar chopp"]
}

let pessoaTexto = JSON.stringify(pessoa); //transformou objeto JSON em string

console.log(pessoaTexto); 
//console.log(pessoaTexto.nome); não funciona pq ja não é objeto, então não chama propriedade

let pessoaJSON = JSON.parse(pessoaTexto); //mudando string de volta para JSON

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies); //por ser objeto novamente, pode acessar atributos
console.log(pessoaJSON.hobbies[1]);
