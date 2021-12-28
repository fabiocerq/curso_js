function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("O parâmetro nome deve ser um nome!");
    } else {
        console.log(`Olá, ${nome}!`);
    }
}

saudacao("Fábio")
saudacao(5)

console.log('teste') //console.log apenas para testar se a execução trava ou não

//código encerrado através da exception criada na função