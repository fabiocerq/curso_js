console.log('1')

setTimeout(function() { //executa em tempo futuro > não trava o código
    console.log('5')
}, 2000); //2000 em milisegundo, logo, 2 segundos

console.log('2')
console.log('3')
console.log('4')
