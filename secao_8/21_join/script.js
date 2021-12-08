let frase = "Testando o método join"

let palavras = frase.split(" "); 

let novaFrase = palavras.join("@"); 

console.log(novaFrase);

let novaFrase2 = palavras.join(" ");

console.log(novaFrase2);

//join junta várias strings em um só com base no parâmetro fornecido