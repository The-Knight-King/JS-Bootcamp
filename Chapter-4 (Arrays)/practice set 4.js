// PQ1. For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// console.log("Marks of students:",marks);
// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let average = (sum/marks.length);

// console.log("Average marks of the class:",average);

// PQ2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% off on them. Change the array to store the final price of the items after applying the offer.

// Method-1 for this PQ.

let items = [250, 645, 300, 900, 50];

for (let i=0; i<items.length; i++) {
    console.log("Original price of item:",items[i]);
    items[i] = items[i] * 0.9;
    console.log("Discounted price after offer:",items[i],"\n\n");
}

console.log("New price of the items:",items);