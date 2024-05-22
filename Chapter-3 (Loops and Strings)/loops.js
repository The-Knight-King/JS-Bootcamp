// Loops in JS

// for loop

for (let i=1; i<=5; i++) {
    console.log("Hi there!");
}

console.log("Loop has ended")

// Calculate sum of first n numbers

let num = prompt("Enter a number till which you want the sum of all numbers:");

let sum = 0;

for (a=1; a<=num; a++) {
    sum = sum + a;
}

console.log("Sum of all the natural numbers till",num,"is:",sum)