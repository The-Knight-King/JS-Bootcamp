// Loops in JS

// for loop

for (let i=1; i<=5; i++) {
    console.log("Hi there!");
}

console.log("Loop has ended")

// Calculate sum of first n numbers

// let num = prompt("Enter a number till which you want the sum of all numbers:");

// let sum = 0;

// for (a=1; a<=num; a++) {
//     sum = sum + a;
// }

// console.log("Sum of all the natural numbers till",num,"is:",sum)

// While loop
// console.log("printing using while loop below")
// let a = 1;
// while (a<=10) {
//     console.log("a:",a);
//     a++;
// }

// do-while loop -> it works exactly like the while loop but there is just a smnall difference between both which is that the in while loop the condition is checked in the very start and it will only execute if the condition is true, but in case of do-while the condition is checked later and it guranteed that the loop will execute at least 1 time.

console.log("printing using do-while loop below");

let a = 20;
do {
    console.log("a:",a);
    a++;
} while (a<=10);