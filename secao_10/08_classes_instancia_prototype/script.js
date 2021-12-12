function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
};

Cachorro.prototype.uivar = function() {
    console.log('auuuuuuuuuu!')
};

Cachorro.prototype.rosnar = function() {
    console.log('GRRRRR!')
};

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();
husky.rosnar();

//forma mais utiizada
//classe fica apenas com propriedades
//métodos são atrelados por prototype