let carros = ['BMW', 'Audi', 'Volks', 'Nissan'];

let removerPrimeiroCarro = carros.shift(); //shift remove primeiro elemento 

console.log(removerPrimeiroCarro); 
console.log(carros);

carros.unshift('Mazda'); //unshift add elemento na primeira posição

console.log(carros);
console.log(carros[0]);