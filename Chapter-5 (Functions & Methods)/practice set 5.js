// PQ1. Create a function using the "function" keyword that takes a string as an argument and returns the number of the vowels in the string.

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

let num = [12, 45, 9, 45, 19, 43];
console.log("Array:",num);

const square = (val) => {       //Writing our callback function here separately
    console.log("Sqaure of each num is:",val*val);
}; 

num.forEach(square);    //passing the callbackFunction as argument inside the forEach method

// here above we wrote the callbackFunction separately and later passed it as an argument inside the forEach method, this is also valid, otherwise we can write the function directly inside the forEach method as well.

