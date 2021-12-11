let arr = [1, 2, 3];
let arr1 = ['Mario', 'Luigi', 1, 2, 3, 4, 5, 6];

function tamanhoArray(array) {
    if (array.length < 5) {
        console.log('Poucos Elementos');
    } else {
        console.log('Muitos Elementos');
    }
};

tamanhoArray(arr);
tamanhoArray(arr1);