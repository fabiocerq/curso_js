//prototype do js pode ser chamado de classe
//classes (em outras linguagens) são molde de um objeto

let cachorro = {
    patas: '4',
    raca: 'SRD',
    latir: function() {
        console.log('Au au!')
    }
}

let pitbull = Object.create(cachorro); //criação de classe através do objeto/classe base cachorro

pitbull.latir();
pitbull.raca = 'Pitbull';

console.log(pitbull.raca);
console.log(cachorro.raca);

let dobermann = Object.create(cachorro);

dobermann.raca = 'Dobermann';

console.log(dobermann.raca);