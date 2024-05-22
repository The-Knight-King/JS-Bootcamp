// To implement some conditions in the code

//they are generally of 3 types: if, if-else and else-if

// if-statment

let age = 25;

console.log("age:",age)

if (age >= 18) {
    console.log("Eligible to vote!");
}

if (age < 18) {
    console.log("Not eligible to vote!");
}

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

let num = prompt("Enter a number: ");

if (num % 2 == 0) {
    console.log("You entered:",num,"which is an even number!");
} else {
    console.log("You entered:",num,"which is an odd number!");
}