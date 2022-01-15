let {readFile} = require('fs'); //fs = file system
                                //biblioteca file system sendo usada com require

readFile("arquivo.txt", "utf8", (error, texto) => {
    if (error) {
        throw error;
    } else {
        console.log(texto);
    }
});