// Parent class

class Person {

    constructor (name) {
        this.species = "Homo Sapiens";
        this.name = name;
        console.log("Name:",name);
    }

    eat () {
        console.log("Eat");
    }

    sleep () {
        console.log("Sleep");
    }       
};

// Creating child classes - both the classes below inherits the person class.

class Engineer extends Person {
    constructor (stream, name) {
        super(name);    //to invoke parent's class constructor, Here calling the const. of Person class.
        this.stream = stream;
        console.log("Stream:",stream);
    }

    work() {
        console.log("Solve problems & build something!");
    }
};

class Doctor extends Person {
    work () {
        console.log("Treat & cure people");
    }
};

// creating objects

let eng1 = new Engineer("CSE","Akshit");
console.log(eng1.work());
console.log(eng1.eat());
console.log(eng1.species);

console.log("\n");
let prerna = new Doctor("Prerna");  //name pass krna padega bcoz parent class ke constructor mein name as argument pass kr rhe hai, otherwise undefined aayega.
console.log(prerna.work());
console.log(prerna.sleep());