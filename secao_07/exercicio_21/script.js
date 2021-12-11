//minha solução 
function tipoDeDado(dado) {
    console.log('O tipo do dado é ' + typeof dado)
}

tipoDeDado(1);
tipoDeDado('Fábio');
tipoDeDado(true);

//solução do professor
function verificarTipoDeDado(dado) {
    if (typeof dado === 'string') {
        console.log('Este dado é uma string')
    } else if (typeof dado === 'number') {
        console.log('Este dado é uma number')
    } else if (typeof dado === 'boolean') {
        console.log('Este dado é uma boolean')
    }
}

console.log('--------')
verificarTipoDeDado(35.77);
verificarTipoDeDado('Fábio');
verificarTipoDeDado(false);