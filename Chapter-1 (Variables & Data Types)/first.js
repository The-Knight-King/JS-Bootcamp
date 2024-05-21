console.log("Hello World!")

console.log("Wake up to Reality!")

// Learning about variables in JS

fullName = "Tony Stark"
age = 45

console.log("Hi! My name is " + fullName + " and I am " + age + " years old.")

// Understanding var, let and const

var num = 34

var num = 45

var num = 89

console.log(num)

// Seeing how to declare using `let`

let x = 45

x = 67

x = 78

console.log(x)

// Seeing how to declare using `const`

const y = 45

console.log()

// Let's try to understand the scope of var, let and const

var abc = 123

{
    var abc = 780
    console.log(abc)
}

// var has a global scope, so it can be defined and accessed from anywhere in the code


// Seeing the scope of let

let xyz = 787976;
console.log("printing variable outside the block: " + xyz)
// Block-1
{
    let xyz = 68789
    console.log("printing variable inside the block: " +xyz)
}
// Block-2
{
    let xyz = 786812
    console.log("printing variable inside another block: " +xyz)
}

