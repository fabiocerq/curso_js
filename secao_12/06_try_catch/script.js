//let b = 2;

try {
    let a = 2 + b;

} catch (e) {
    //console.log(e); //se não usar throw error, o programa não para
    throw new Error(e);
}

console.log('teste')