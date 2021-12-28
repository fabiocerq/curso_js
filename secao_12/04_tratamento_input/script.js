function checarNumero(num) {
    let number = Number(num); //transformação de string em numero pelo objeto Number
    if(Number.isNaN(number)) {
        //console.log("Por favor, digite apenas número para o programa!")
        alert("Por favor, digite apenas número para o programa!");
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero("Fábio");

let number = prompt("Digite um número")

checarNumero(number);