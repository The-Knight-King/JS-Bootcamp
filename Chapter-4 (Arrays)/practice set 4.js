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

// let items = [250, 645, 300, 900, 50];

// for (let i=0; i<items.length; i++) {
//     console.log("Original price of item:",items[i]);
//     items[i] = items[i] * 0.9;
//     console.log("Discounted price after offer:",items[i],"\n\n");
// }

// console.log("New price of the items:",items);

/* PQ3. Create an array to store companies -> Bloomberg, Microsoft, Uber, Google, IBM, Netflix.
a. Remove the first company from the array.
b. Remove Uber and add Ola in its place.
c. Add Amazon at the end. */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log("Original Array:",companies)

// part a
companies.shift()
console.log("Array after deleting the first company:",companies)

// part b
companies.splice(1,1,"Ola");
console.log("Replacing Uber with Ola:",companies);

// part c
companies.push("Amazon");
console.log("Adding Amazon at the end:",companies);