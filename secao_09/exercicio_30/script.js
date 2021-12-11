let nomes = ['Fábio', 'Thales', 'Bruno', 'Pedro', 'Marco'];

nomes.forEach(nome => {
    if (nome == 'Fábio') {
        console.log("Meu nome está aí")
    }

})

//solução do professor

if(nomes.includes('Fábio')) {
    console.log("Meu nome está aí");
} else {
    console.log("Meu nome não está aí");
};