let carro = {
    portas: 2,
    portamalas: "200L",
    motor: '2.0'
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

console.log(carro);
console.log('-----');
Object.assign(carro, adicionais);
console.log(carro);

//assign une dois objetos