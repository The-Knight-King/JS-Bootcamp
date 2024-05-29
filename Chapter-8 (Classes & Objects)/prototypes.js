// Classes and Objects in JS

const student = {
    fullName: "Akshit Mittal",
    marks: 95,
    printMarks: function () {
        console.log("Your marks:", this.marks); //here this.marks means student.marks, this keyword is dependent on the context and scope of the variable/object it is applied to.
    },
};

console.log(student.fullName);
student.printMarks();

// use-case of prototype - basically when we have multiple objects created in our code and we want to use the functions defined in our obj1 inside some other objects, we don't have to write those functions again in all those objects, we can simply make that obj1 as prototype of all the other objects where we want to invoke that function.

// creating a generic employee layout
const employee = {
    salary: 50000,
    calcTax () {
        console.log("The tax rate is 5%, so your tax amount will be:",this.salary*0.05);
    },
};

// now we will create some employee objects and invoke the calcTax function in them defined above

const emp1 = {
    salary: 60000,
};

const emp2 = {
    salary: 40000,
};

const emp3 = {
    salary: 80000,
};

// creating employee as prototype for all the above emp's

emp1.__proto__ = employee;
console.log(emp1.calcTax());

emp2.__proto__ = employee;
console.log(emp2.calcTax());

emp3.__proto__ = employee;
console.log(emp3.calcTax());