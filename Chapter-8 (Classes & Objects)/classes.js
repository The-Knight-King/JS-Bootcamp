// learning abt classes

// creating a class

class Car {

    constructor (name,brand) {
        this.name = name;   //referring to the particular obj using `this` for which the argument name is passed as an argument in the object.
        console.log("Name:",this.name);

        this.brand = brand;    //referring to the particular obj using `this` for which the argument brand is passed as an argument in the object.
        console.log("Brand:",brand);
    }

    engineType () {
        console.log("Engine Type: 'Diesel'")
    }
};

// creating objects from the class
console.log("Car 1:");
let car1 = new Car("Verna","Hyundai");  //constructor
car1.engineType();
console.log(car1);


// creating object 2
console.log("\nCar 2:");
let car2 = new Car("Innova","Toyota");  //constructor
car2.engineType();
console.log(car2);