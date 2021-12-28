let arr = [1, 2, 3, 4, 5];
let arr2 = [];

function iterarArray(arr) {
    if (arr.length == 0) {
        throw new Error("O array precisa de pelo menos 1 elemento!")
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(i);
        }
    }
}

function arrayVazio(arr) {
    if(arr.length>0) {
        throw new console.error("O array não pode ter elementos!");
    } else {
        console.log('Funcionou!')
    }
}

iterarArray(arr)
iterarArray(arr2) 
console.log('--------')
arrayVazio(arr)
arrayVazio(arr2)

//assertion = verificações do programa para que tudo aconteça de forma certa
//usa-se throw new error