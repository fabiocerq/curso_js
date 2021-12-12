class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    };

    latir() {
        console.log('Au au!')
    }

    get getCor() {
        return this.cor;
    }
    
    set setCor(cor) {
        return this.cor;
    }
};

let pastor = new Cachorro('Pastor Alemão', 'Sem cor')

console.log(pastor);

pastor.setCor = 'Marrom'; //mudando cor com set

console.log(pastor.getCor); //retornando cor com get