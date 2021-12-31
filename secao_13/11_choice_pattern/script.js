const regex = /\w+: (Fábio|Pedro|Marco)/; //nome: ahdjashhlkjdaslkjdha
//valida se o fornecido, está nas copções predeterminadas

console.log(regex.test("Nome: Fábio"))
console.log(regex.test("Nome: Lorena"))
console.log(regex.test("Nome: Edna"))
console.log(regex.test("Nome: Maria"))
