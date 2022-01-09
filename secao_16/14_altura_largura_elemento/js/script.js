let elemento = document.querySelector('#titulo-principal');

console.log("largura: " + elemento.offsetWidth); //considera borda
console.log("altura: " + elemento.offsetHeight);

console.log("largura: " + elemento.clientWidth); //não considera borda
console.log("altura: " + elemento.clientHeight);


