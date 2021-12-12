class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    };

    latir() {
        console.log('Au au!')
    }
};

Cachorro.prototype.raca = 'SRD'; 

let patas = Symbol();

Cachorro.prototype[patas] = 4; //pata agora só acessível por meio de prototype

let husky = new Cachorro('Husky', 'Preto e cinza');

husky.latir();

console.log(Cachorro.prototype.raca);
console.log(husky.raca);

//acessando Symbol

console.log(Cachorro.prototype[patas]);
console.log(husky[patas]);
