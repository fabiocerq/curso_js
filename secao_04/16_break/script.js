let nome = 'Fábio'

for (let i = 0; i < 10; i = i + 1) {

    if (i == 3) {
        nome = 'Pedro'
    }

    if (i == 5 && nome == 'Pedro') {
        console.log("O nome é Pedro, pode parar")
        break; //para a execução qnd requisitado
    }
    
    console.log(i);
}