// Learning abt array methods in JS

// push() method

let veggies = ['potato', 'ghia', 'onion', 'garlic'];
console.log("Veggies:",veggies);

veggies.push("pumpkin", "karela", "capsicum");
console.log("Veggies list after push method:",veggies);

// pop() method - it also returns the deleted item

let deletedItem = veggies.pop();
console.log("Veggies list after pop method:",veggies);
console.log("Deleted Item:",deletedItem);

// toString() method - returns a new array and doesn't change the original array
console.log("Array:",veggies);
console.log("Array after toString method:",veggies.toString());
console.log(veggies);

// concat method

// let marvel_heroes = ['Thor', 'Hulk', 'Iron Man'];
// console.log("Marvel Heroes:",marvel_heroes);
// let dc_heroes = ['Batman', 'Superman', 'Flash'];
// console.log("DC Heroes:",dc_heroes);

// let heroes = marvel_heroes.concat(dc_heroes);
// console.log("Array after concat method:",heroes);

// // unshift method - it works like push(), but it inserts the element to the start unlike push().
// console.log("Array:",marvel_heroes);
// marvel_heroes.unshift("Captain America");
// console.log("Array after unshift() method:",marvel_heroes);

// // shift method - it is similar to pop() but it deletes from the start unlike pop()
// console.log("Original Array:",marvel_heroes);
// let val = marvel_heroes.shift();
// console.log("Array after shift() method:",marvel_heroes);
// console.log("Deleted item:",val);

// slice method - it doesn't change the original array

let marvel_heroes = ['iron man','thor','spiderman','captain america','hulk','antman','hawkeye'];
console.log("Heroes:",marvel_heroes);

console.log("Array after slice method:",marvel_heroes.slice(2,5));

// splice method - it changes the original array.

// Replacing 2 elements inside the array 

console.log("original array:",marvel_heroes);
marvel_heroes.splice(2, 2, "Falcon", "War Machine");
console.log("replacing elements using splice():",marvel_heroes);

// add an element using splice method
console.log("Array:",marvel_heroes);
marvel_heroes.splice(4,0,"Captain America");
console.log("adding element using splice():",marvel_heroes);

// deleting multiple elements using splice method
marvel_heroes.splice(2,2);
console.log("Deleting multiple elements using splice():",marvel_heroes);

// if we pass a single index in splice it will delete all the elements in the array starting from that index till the last index and will trim the original array.

console.log("Original Array:",marvel_heroes);
console.log("Returning the spliced array:",marvel_heroes.splice(2));
console.log("Final array after splice (passed single index value):",marvel_heroes);