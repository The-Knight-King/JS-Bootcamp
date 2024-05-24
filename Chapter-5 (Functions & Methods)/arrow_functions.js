// Arrow functions - compact way of writing functions

//Normal sum function
function sum(a, b) {
    c = a + b;
    return c;
}

let val = sum(4,5);
console.log("Sum:",val);

// Arrow function of the above Sum function

const arrowSum = (a,b) => {
    console.log(a + b);
};
console.log("Calculating sum using arrow function:");
arrowSum(19,76);

// multiplication function
function product(a,b) {
    c = a * b;
    return c;
}

let prod = product(5,6);
console.log("Product:",prod);

// Arrow function of the above product function

const arrowProd = (a,b) => {
    console.log(a * b);
};

console.log("Calculating product using arrow function");
arrowProd(25,26);