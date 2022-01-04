function* criadorId() {
  let id = 0;
  
  while(true) {
      yield id++;
  }
}

let criarID = criadorId();

console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next());

//generator é uma "promise" em loop com objetivo de criar valores únicos
//function* => o asterisco determina que é um generator