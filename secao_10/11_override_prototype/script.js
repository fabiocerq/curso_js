//override substitui valor padrão da classe para o requerido, mas muda apenas no objeto criado
//a classe base continuará com seus padrões, mesmo com override

class Cachorro {
    constructor(raca, patas) {
        this.raca = raca;
        this.patas = patas;
    };

    latir() {
        console.log('Au au!')
    }
};

Cachorro.prototype.raca = 'SRD'; //criação de padrão para classe base
Cachorro.prototype.patas = 4; //criação de padrão para classe base

let husky = new Cachorro('Husky', 4);

console.log(husky.patas);

husky.latir();

console.log(Cachorro.prototype.raca);
console.log(husky.raca);

