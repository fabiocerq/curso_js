let {readFile, writeFile} = require('fs'); //fs = file system
//biblioteca file system sendo usada com require

readFile("arquivo.txt", "utf8", (error, texto) => {
    if (error) {
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile("arquivo.txt", "Texto por write file", (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso!")
    }
})