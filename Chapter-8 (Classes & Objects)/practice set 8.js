/* PQ1. You are creating a website for your college. Create a class `User` with 2 properties that is name and email. It also has a method called viewData() that allows user to view website data.*/

let body = document.querySelector("body");

class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
        console.log(`Name: ${name} and Email: ${email}`);
    }

    viewData () {
        console.log(`Website Data:\n${body.innerText}`);
    }
};

let student1 = new User("Akshit","akshitmittal98@gmail.com");
student1.viewData();

/* PQ2. Create a new class called `Admin`, which inherits from `User`. Add a new method called editData() to Admin that allows it to edit data. */

class Admin extends User {
    editData () {
        console.log("Welcome Admin! you can edit the site data.");
    }
};

let admin1 = new Admin("Tony","tony@admin.com");
admin1.viewData();
admin1.editData();