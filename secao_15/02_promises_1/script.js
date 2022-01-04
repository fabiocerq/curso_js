let p = Promise.resolve(5);

console.log('1')
console.log('2')
console.log('3')

console.log(p)

p.then((value) => {console.log(`o valor é ${value}`)}); 

console.log('encadeando')
p.then((value) => {return value + 5})
.then((value) => {console.log(`o valor é ${value}`)}); 

//pode ser encadeado com visto acima
