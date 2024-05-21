// Let's learn about data types

let age = 24;
console.log("age = " + age)
console.log("Type of age: " + typeof(age));   // To check the data type of a var

// String Data type
fullName = "Tony Stark";
console.log("Name = " + fullName)
console.log("Type of Name: " + typeof(fullName));

// Boolean Data type
isFollow = true;
console.log("isFollow = " + isFollow)
console.log("Type of isFollow: " + typeof(isFollow));

// Null data type
let x = null;
console.log("x = " + x)
console.log("Type of x: " + typeof(x));

// Object Data type

const student = {
    fullName:"Rahul Kumar",
    age:20,
    cgpa:8.2,
    isPass:true
};
console.log(student)
console.log("Type of student: " + typeof(student));
console.log(student.fullName)    // how to access a particular key in a object
console.log(student["age"])     // Another way to access the key of the object

// How to change a value of a key in an ojbect

student.age = student.age + 2;
console.log("Updated age of the student: " + student.age)