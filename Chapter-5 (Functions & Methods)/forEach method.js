// forEach loop in Arrays -  it is a method used for arrays itself.

console.log("Let's learn abt the forEach method!!");

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal (val) { //val at each index
    console.log(val);
});

// we usually pass the arroe functions as callback functions

arr.forEach((val) => {
    console.log("Printing the values of our array one by one:",val);
})

// We use forEach method usually when we want to access each element of the array and perform some action on them. Ex: in the below array we want to convert each string into Uppercase.

// Note: There are 3 params that can be passed in the callbackFucntion and they are: value, index and the array itself. See in the example below:

let cities = ['delhi', 'mumbai', 'pune', 'bangalore'];

cities.forEach((val, idx, arr) => {
    console.log("City is:",val.toUpperCase(),"& it's respective index is:",idx,"& the array is:",arr);
})