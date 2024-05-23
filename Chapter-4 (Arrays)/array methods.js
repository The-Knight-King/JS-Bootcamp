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

let marvel_heroes = ['Thor', 'Hulk', 'Iron Man'];
console.log("Marvel Heroes:",marvel_heroes);
let dc_heroes = ['Batman', 'Superman', 'Flash'];
console.log("DC Heroes:",dc_heroes);

let heroes = marvel_heroes.concat(dc_heroes);
console.log("Array after concat method:",heroes);

// unshift method - it works like push(), but it inserts the element to the start unlike push().
console.log("Array:",marvel_heroes);
marvel_heroes.unshift("Captain America");
console.log("Array after unshift() method:",marvel_heroes);

// shift method - it is similar to pop() but it deletes from the start unlike pop()
console.log("Original Array:",marvel_heroes);
let val = marvel_heroes.shift();
console.log("Array after shift() method:",marvel_heroes);
console.log("Deleted item:",val);