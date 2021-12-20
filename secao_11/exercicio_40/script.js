class Conta {
    constructor(saldoCC, saldoCP, juros) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }

    deposito(montante) {
        this.saldoCC += montante;
    }

    saque(montante) {
        this.saldoCC -= montante;
    }

    transferenciaCP(montante) {
        this.saldoCC -= montante;
        this.saldoCP += montante;
    }

    transferenciaCC(montante) {
        this.saldoCP -= montante;
        this.saldoCC += montante;
    }

    jurosAniversario() {
        let juros = (this.saldoCP * this.juros)/100;
        this.saldoCP += juros;
    }

}

class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros) {
        super(saldoCC, saldoCP, juros*2)
    }
}

let conta = new Conta(1000,500,1)


console.log(conta);

conta.deposito(500);

console.log(conta);

conta.saque(200);

console.log(conta);

conta.transferenciaCP(150);

console.log(conta); 

conta.jurosAniversario();

console.log(conta); 


let contaEsp = new ContaEspecial(10000,50000,1)
console.log(contaEsp);

contaEsp.saque(5000)
console.log(contaEsp);

contaEsp.jurosAniversario();
console.log(contaEsp);



