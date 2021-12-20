class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }

}

let endereco = new Endereco("Rua dos Bobos","Imaginário","Fictício","ZE");

console.log(endereco);

endereco.novaRua = "Rua dos Loucos";
endereco.bairro = "Jardim Apipema";
endereco.cidade = "Salvador";
endereco.estado = "Bahia";

console.log(endereco);
