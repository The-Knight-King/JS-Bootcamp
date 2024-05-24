// here we are going to learn some more array methods

// map method - very similar to forEach method, the only difference is that it returns a new array and isused when we want a new array of the values after performing the operation and doesn't want the original array to be altered.
console.log("** map method **");

let num = [12, 45, 43, 22, 78];

console.log("Our array:",num);

console.log("Using the map method to print the square of the all nos. in the array");

let newArr = num.map((val => {
    return val**2;
}));

console.log(newArr);

// filter method - filters out some values by accessing all the values in an array and then returns the filtered values based on the condition

// print all the even nos. from an array using filter method

console.log("\n** filter method **");

let arr = [3,123,4345,674,334,12,2,0,97,54,31];
console.log("Our array:",arr);

let even = arr.filter((val) => {
    return val % 2 == 0;
});

console.log("All even nos.:",even);

// Reduce method - performs some operations and reduces the array to single value. Let's try to understand it with the help of an example.

// performing sum of elements in an array using reduce method.

console.log("\n** reduce method **");

let array = [1,2,3,4];
console.log("Array:", array);

let sum = array.reduce((prev,curr) => {
    return prev + curr;
});

console.log("Sum of array:",sum);

// Another example - find the largest number in an array.

let numbers = [34,1230,345,12,3466,76];
console.log("Array:",numbers);

let largest = numbers.reduce((prev,current) => {
    return prev > current ? prev : current;     // using ternary operator for the condition
});

console.log("The largest element in te array is:",largest);