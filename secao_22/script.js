//1 - var, let, const
console.log('1 - Var x Let x Const')

var x = 10;
var y = 15;

if (y > 10) {
    var x = 5; // altera o x anterior, o que não é o certo
    console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i);

function logName() {
    const name = "Fábio";
    console.log(name);
}

const name = "Pedro"; //não adianta tentar reatribuir, não funciona por ser const

logName();

console.log(name);
console.log('-------')

//2 - Arrow Functions
console.log('2 - Arrow Functions')

const sum = function (a, b) {
    return a + b;
};

//const arrowSum = (a, b) => {
//    return a + b;
//}

const arrowSum = (a, b) => a + b; // outra forma para uma arrow function curta

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
    if (name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    };
};

console.log(greeting("Fábio"));
console.log(greeting(""));

const testeArrow = () => console.log("Testou");
testeArrow;

const user = {
    name: 'Theo',
    sayUserName() {
        var self = this;
        setTimeout(function () {
            console.log(self);
            console.log("Username: " + self.name);
        }, 500)
    },

    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log("Username: " + this.name);
        }, 500);
    }
};

//user.sayUserName();
//user.sayUserNameArrow();
console.log('-------')

//3 - método filter
console.log('3 - Método Filter')

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log(highNumbers);

const users = [
    { name: 'Fábio', available: true },
    { name: 'Pedro', available: false },
    { name: 'Marco', available: false },
    { name: 'Lorena', available: true },
]

const availableUsers = users.filter((user) => user.available); //return implicito
const unavailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(unavailableUsers);
console.log('-------')

//4 - Map
console.log('4 - Map')

const products = [
    {name: 'camisa', price: 45.99, category: 'roupas'},
    {name: 'microondas', price: 125, category: 'eletro'},
    {name: 'PS$', price: 2550.99, category: 'eletronico'},
    {name: 'cueca', price: 10.99, category: 'roupas'}
]

products.map((product) => {
    if(product.category === 'roupas') {
        product.onSale = true;
    }
});

console.log(products);
console.log('-------')

//5 - Template Literals
console.log('5 - Template Literals')

const userName = 'Fábio';
const age = 28;
const height = 1.84;

console.log(`Nome do usuário é ${userName}, tem ${age} anos e mede ${height} metros`)
console.log('-------')

//6 - destructuring
console.log('6 - Destructuring')

const frutas = ["maçã", "banana", "mamão"];

const [f1, f2, f3] = frutas;

console.log(f1);
console.log(f3);

const productDetails = {
    name: 'Mouse',
    price: 249.99,
    category: "Periféricos",
    color: "Preto"
}

const {name: productName, price, category: productCategory,color} = productDetails;
console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e a cor é ${color}`);
console.log('-------')

//7 - Spread operator
console.log('7 - Spread Operator')

const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = [...a1, ...a2]; //unificando array

console.log(a3) 

const a4 = [0, ...a1, 4];
console.log(a4) 

const carName = {name: 'Gol'}
const carBrand = {brand: "VW"}
const otherInfos = {km: 100000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos};

console.log(car);
console.log('-------')

//8 - Classes
console.log('8 - Classes')

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100-discount)/100)
    }
}

const shirt = new Product("Camisa gola V", 100);

console.log(shirt.name);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product("Nike", 249.99);
console.log(tenis.name);
console.log(tenis.productWithDiscount(10));
console.log(tenis.productWithDiscount(50));
console.log('-------')

//9 - Herança de Classes
console.log('8 - Classes')

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors; 
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Boné", 49.99, ["Laranja", "Marrom","Branco"]);

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();