// PQ1. Get user to input a number using a prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

// let num = prompt("Enter a number:");

// if (num%5 == 0) {
//     console.log("You entered",num,"and it is a multiple of 5");
// } else {
//     console.log("You entered",num,"and it is not a multiple of 5");
// }

/* PQ2. Write a code which can give grades to students according to their scores:
 -> 90-100,A
 -> 70-89,B
 -> 60-69,C
 -> 50-59,D
 -> 0-49,F  */

let score = prompt("Enter the score of the student:")

if (score >= 90 && score < 100) {
    console.log("Student Grade: A");
} else if (score >= 70 && score < 90) {
    console.log("Student Grade: B");
} else if (score >= 60 && score < 70) {
    console.log("Student Grade: C");
} else if (score >= 50 && score < 60) {
    console.log("Student Grade: D");
} else if (score >= 100) {
    console.log("Invalid Score!, Enter again");
} else {
    console.log("Student Grade: F");
}