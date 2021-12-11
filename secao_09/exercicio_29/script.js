let onibus = {
    rodas: 8,
    limiteDePassageiro: 40,
    portas: 2    
};

delete onibus.rodas;

onibus.janelas = 20;

console.log('Limite de Passageiros: ' + onibus.limiteDePassageiro);
console.log('Portas: ' + onibus.portas);
console.log('Número de janelas: ' + onibus.janelas);



