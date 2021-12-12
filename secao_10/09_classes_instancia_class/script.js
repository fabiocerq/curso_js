//site caniuse.com
//informa se o que você quer usar, roda onde você precisa

class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    };
};


let husky = new Cachorro('Husky', 4, 'cinza');

console.log(husky);

//esse método de instanciação surgiu a partir do ES6