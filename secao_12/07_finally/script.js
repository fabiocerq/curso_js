let b = 2;

try {
    let a = 2 + b;

} catch (e) {
    console.log(e);

} finally {
    console.log('executou') 
    //pouco usado
    //executa algo mesmo dando certo ou errado
}

//console.log('teste')