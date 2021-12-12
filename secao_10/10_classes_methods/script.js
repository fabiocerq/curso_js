class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    };

    latir() {
        console.log('Au au')
    }
};

Cachorro.prototype.patas = 4; //criação de padrão para classe base

let husky = new Cachorro('Husky', 'Preto e Cinza');

console.log(husky.patas);
husky.latir();

