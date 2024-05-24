// PQ1. Create a function using the "function" keyword that takes a string as an argument and returns the number of the vowels in the string.

// console.log("\n** PQ-1 **");

// let str = prompt("Enter a string:");
// str1 = str.toLowerCase();

// function vowelCount (str1) {
//     let count = 0;
//     for (let i of str1) {
//         if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
//             count++;
//         }
//     }  
//     console.log(`No. of vowels in '${str}' = ${count}`);
// };

// vowelCount(str1);   //calling the function

// PQ2. For a given array of numbers, print the square of each value using the forEach loop.
console.log("\n** PQ-2 **");
let num = [12, 45, 9, 45, 19, 43];
console.log("Array:",num);

const square = (val) => {       //Writing our callback function here separately
    console.log("Sqaure of each num is:",val*val);
}; 

num.forEach(square);    //passing the callbackFunction as argument inside the forEach method

// here above we wrote the callbackFunction separately and later passed it as an argument inside the forEach method, this is also valid, otherwise we can write the function directly inside the forEach method as well.

// PQ3. We are given an array of marks of students. Filter out the marks of the students that scored 90+.

console.log("\n** PQ-3 **");

let marks = [23,76,91,34,95,89,99,67,98,90];
console.log("Marks:",marks);

let goodMarks = marks.filter((val) => {
    return val > 90;
});

console.log("Good marks:",goodMarks);

/* PQ4. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate the sum of all the numbers in the array.
Use the reduce method to calculate the product of all the numbers in the array or in other words factorial of n. */

console.log("\n** PQ-4 **");

let inp = prompt("Enter a number upto which you want to generate an array");

let arr = [];
// creating array from the user input
for (let i = 1; i <= inp; i++) {
    arr[i-1] = i;
};

console.log("Your array:",arr);

// reduce method for sum
let sum = arr.reduce((prev,curr) => {
    return prev + curr;
});

console.log("Sum of all the numbers in the above array:",sum);

// reduce method for factorial of n
let factorial = arr.reduce((prev,curr) => {
    return prev * curr;
});

console.log("Factorial of",inp,"is:",factorial);