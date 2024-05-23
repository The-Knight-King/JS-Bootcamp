// Arrays in JS

let marks = [97, 67, 78, 34, 90, 89];
console.log("Marks:",marks);
console.log("length of the array is:",marks.length);
console.log("Data type of Marks:",typeof(marks));

// Array Indices
// Indices in arrays starts at 0

console.log("Accessing the array value at index 1:",marks[1]);

// Values in arrays can be updated easily by simply accessing it from the index value and then assigning the new value.

console.log("Marks array:",marks);
marks[2] = 41;
console.log("Replacing the value at index 2");
console.log("Updated Marks:",marks);

// Looping over Arrays - print all the elements of an array using loops

let heroes = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Flash', 'Batman', 'Spiderman'];
console.log("Our Heroes Array:", heroes);

console.log("Looping over our Heroes Array:")
for (let hero of heroes) {
    console.log(hero);
}

// Alternate way to write the above loop
for (let i=0;i < heroes.length; i++) {
    console.log("Our Hero is:",heroes[i]);
}