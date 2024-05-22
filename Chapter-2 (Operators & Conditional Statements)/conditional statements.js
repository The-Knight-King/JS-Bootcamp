// To implement some conditions in the code

//they are generally of 3 types: if, if-else and else-if

// if-statment

// let age = 25;

// console.log("age:",age)

// if (age >= 18) {
//     console.log("Eligible to vote!");
// }

// if (age < 18) {
//     console.log("Not eligible to vote!");
// }

// if-else statement

let color = "black";

console.log("color:",color)

let mode;

if (color == "black") {
    mode = "dark";
} else {
    mode = "light";
}

console.log("mode:",mode)

// How to find if a number is `even` or `odd` using if-else:

// let num = prompt("Enter a number: ");

// if (num % 2 == 0) {
//     console.log("You entered:",num,"which is an even number!");
// } else {
//     console.log("You entered:",num,"which is an odd number!");
// }

// else-if statements

// let person_age = prompt("Enter your age below:");

// if (person_age < 18) {
//     console.log("You are a Junior!")
// } else if (person_age >= 60) {
//     console.log("You are a Senior Citizen!")
// } else {
//     console.log("You are an Adult!")
// }

// Ternary Operators - it works on 3 operands ek saath, basically it's just a compact if-else
// Syntax -> condition ? true output:false output

let age = prompt("Enter your age below:");

let result = age >= 18 ? "Can Vote!" : "Cannot Vote!";

console.log(result)