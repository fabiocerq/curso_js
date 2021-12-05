function inverterSinal(numNegativo) {
    if (numNegativo < 0) {
        console.log(`O numero positivo de ${numNegativo} é: ` + Math.abs(numNegativo));
    } else {
        console.log("Número já é positivo");
    }
}

inverterSinal(1);
inverterSinal(-33);
inverterSinal(1-10);

//solução do professor

function numeroPositivo(numNegativo) {
    return Math.abs(numNegativo);
}

console.log(numeroPositivo(-13));
console.log(numeroPositivo(5)); 
console.log(numeroPositivo(-57.55));
