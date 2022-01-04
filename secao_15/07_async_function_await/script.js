function somaDelay (a,b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a+b);
        },4000)
    })
}
async function resSoma(a,b,c) {
    let x = somaDelay(a,b);
    let y = c;

    return await x + y;

}

//console.log(resSoma(1,2,3)); //promise
resSoma(1,2,3).then(value => console.log(value)); //resultado da promise

//Await => recurso para forçar que o algoritmo espere informações para sua execução, seja info interna ou externa

