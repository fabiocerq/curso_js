let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5)) //intervalo > inclusive 4, exclusive 5, então só o elemento de índice 4 será impresso

console.log(nums.slice(3)); //pega tudo do índice estabelecido até o fim do array

console.log(nums.slice(-2)); //seleção a partir do fim do array

console.log(nums.slice(3, -2)); //pega do índice 3 e retira últimos 2 elementos