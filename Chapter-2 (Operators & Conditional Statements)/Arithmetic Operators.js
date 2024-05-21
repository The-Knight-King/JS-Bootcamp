// Learning about Arithmatic Operators

// Binary Operators: +,-,*,/,%,**

let a = 10;
let b = 8;
console.log("a =",a,"& b =", b);

let sum = a+b;
console.log("a + b:",sum)

let difference = a-b;
console.log("a - b:",difference);

let prod = a*b;
console.log("a * b:",prod);

let quotient = a/b;
console.log("a / b:",quotient);

// Modulus Operator
let remainder = a%b;
console.log("a % b:",remainder);

// Exponentiation operator
let power = a**b;
console.log("a^b:",power);

// The below 2 operators are special and only need a single operand, they are known as Unary Operators.

// Increment operator (++)
a+=2;
console.log("Incremrent the value of a by 2:",a)

// Now there is something called post-increment (a++) and pre-increment (++a), both are valid

a = 34;
console.log("New value of a:", a);
console.log("++a:", ++a);
console.log("a++:", a++);
console.log("printing value of a now after a++:", a)

// Basically ++a increases the value of the variable first and then print it whereas a++ will print the value first and then increase the value, so if you print it again in the next line you will see the increased value.

// Decrement operator (--)
a-=2;
console.log("Decrement the value of a by 2:",a)