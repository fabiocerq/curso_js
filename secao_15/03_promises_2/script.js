let p = Promise.resolve(new Error("algo deu errado!"));

console.log('aehooo')

p.then(value => console.log(value))
 .catch(reason => console.log("Falhou:" + reason));

 //tratamento de erro com promises
