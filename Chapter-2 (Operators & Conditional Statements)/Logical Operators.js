// Logical Operators compares two or more expressions and then give a booloean value based on the comparison. (Logical AND(&&), Logical OR(||), Logical NOT(!))

// Logical AND (&&) - it will giev true only if both the conditions are true.

let a = 10;
let b = 5;
console.log("a:",a,"b:",b);

console.log("Logical AND operator:")

let cond1 = a > b;  //true
console.log("cond1: a > b =",cond1);

let cond2 = a == 10; //true
console.log("cond2: a == 10 =",cond2);

console.log("cond1 && cond2:",cond1&&cond2)

let cond3 = a < b; //false
console.log("cond3: a < b =",cond3);

console.log("cond1 && cond3:",cond1&&cond3)

// Logical OR (||) - it will give false only if both the conditions are false.

console.log("Logical OR operator:")

let cond4 = a < b;  //false
console.log("cond4: a < b =",cond4);

let cond5 = a == 10; //true
console.log("cond5: a == 10 =",cond5);

console.log("cond4 || cond5:",cond4||cond5)

let cond6 = a < b; //false
console.log("cond6: a < b =",cond6);

console.log("cond4 || cond6:",cond4||cond6);

// Logical NOT (!) - It will change complement the value of the expression i.e. true will become false, and false become true.

console.log("Logical NOT operator:");

let cond7 = a <= b;
console.log("cond7: a <= b =",cond7);
console.log("!(cond7):",!(cond7));