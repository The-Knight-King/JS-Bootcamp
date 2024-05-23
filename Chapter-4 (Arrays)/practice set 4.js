// Q1. For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
console.log("Marks of students:",marks);
let sum = 0;

for (let val of marks) {
    sum += val;
}

let average = (sum/marks.length);

console.log("Average marks of the class:",average);

