function numeroPar(num) {
    for (let i = num; i >= 0; i--) {
        if ((num - i) % 2 == 0) {
            console.log(num - (num - i) - 1);
            //poderia ser console.log(i - 1);
        }
    }
}

numeroPar(17);

//solução do professor

function imprimePar(num) {
    for (let i = num; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

console.log('--------')
imprimePar(17);
