// PQ1. Create a function using the "function" keyword that takes a string as an argument and returns the number of the vowels in the string.

let str = prompt("Enter a string:");
str1 = str.toLowerCase();

function vowelCount (str1) {
    let count = 0;
    for (let i of str1) {
        if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            count++;
        }
    }  
    console.log(`No. of vowels in '${str}' = ${count}`);
};

vowelCount(str1);   //calling the function

