class Carro {
    constructor(marca, cor, nivelGasolina, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.nivelGasolina = nivelGasolina;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litrosConsumidos = km/this.consumo;
        this.nivelGasolina -= litrosConsumidos;
    }

    abastecer(litro) {
        this.nivelGasolina += litro;
    }

}

let carro = new Carro("Mazda", "Preto", 100, 14);
console.log(carro);

carro.dirigir(100);
console.log(carro);

carro.abastecer(10);
console.log(carro);
