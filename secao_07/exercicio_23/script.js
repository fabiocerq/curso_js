function limiteTexto(texto) {
    if (texto.length > 10) {
        console.log('texto muito longo');
    } else {
        console.log('Texto dentro do limte')
    }
}

limiteTexto('Fábio')
limiteTexto('Refazendo porque apaguei sem querer') //length conta espaço em branco
limiteTexto('58')