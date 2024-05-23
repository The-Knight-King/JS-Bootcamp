//  Learning about functions and methods

function myFunction () {
    console.log("This is my first function");
    console.log("Learning functions in JS");
} 

myFunction();   // calling the declared function
myFunction();   

// declaring functions with parameters

function myFunc (msg) {     //paramter -> input
    console.log(msg);
}

myFunc("Hi there!")     // calling the function, have to give arguments in the function.

// lets' create a function that calculates the sum of 2 nos.

function Sum (a,b) {
    console.log(`Sum of ${a} and ${b} is: ${a+b}`);
}

Sum(2,3);
Sum(45,34);

// function with return statement

function product (x,y) {
    prod = x * y;
    return prod;    //it will just return the value but doesn't print it
}

let val = product(5,6);     //have to assign the returned value to a variable 
console.log("Product:",val);