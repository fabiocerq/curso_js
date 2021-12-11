let nome = 'Vandersson'
let idade = 28

if (nome != undefined && nome == 'Fábio') {
    console.log('Nome está definido')
} else if (nome == 'Vandersson' && nome.length > 5 && idade == 50) {
    console.log('Nome é Vandersson')
} else {
    console.log("Não é Vandersson")
}

if (1 > 2) {
    console.log('Deu ruim aqui')
} else if (1 == 2) {
    console.log('Deu ruim de novo')
} else {
    console.log('1 é menor que 2')
}