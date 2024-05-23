// Q1. Print all the even no. 0 to 100. 

// console.log("Printing all the even nos. till 100")

// for (let i=0;i<=100;i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// };

// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.

// let gameNum = 10;

// let userNum = prompt("Guess a number between 0 and 10:");

// while(userNum != gameNum) {
//     userNum = prompt("You guessed the wrong number! Guess again:");
// }

// alert("Congrats! you guessed it right!!")

/* Q3. Prompt the user to enter their full name. Generate a username for them based on the user input. Start with @, followed by their full name and ending with their fullname length.
Example: user input = "Akshit Mittal", so username should be "@akshit_mittal13"
*/

let str = prompt("Enter your full name:");
let str1 = "@";
let str2 = str.replaceAll(" ","_");
let str3 = str.length;
let username = str1+str2.toLowerCase()+str3;
console.log(`Suggested username: ${username}`);