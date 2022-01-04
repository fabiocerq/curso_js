async function somar (a,b) {
    return a+b;
}

console.log(somar(2,4));

somar(2,4).then(value => console.log(value));

//async function são promessas com notação de função que retornam promieses 
//Porém, se o then for usado, a função está sendo resolvida 
//caso dê erro, sera uma reject