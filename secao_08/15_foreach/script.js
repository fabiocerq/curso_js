let nomes = ['Maria', 'José', 'Fábio', 'Pedro', 'Marco'];

nomes.forEach(nome => { //itera cada elemento do array
    console.log('O nome é ' + nome)
})

console.log('-----')

nomes.forEach(i => { //também funciona, porém usando nomenclatura é melhor para leitura do código
    console.log('O nome é ' + i)
})