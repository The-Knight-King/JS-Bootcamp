// Assignment operators : to assign values to variables (=,+=,-=,*=,%=,**=)

let a = 5;
console.log('a:',a);

a += 4;
console.log("a += 4:",a);

a -= 4;
console.log("a -= 4:",a);

a *= 4;
console.log("a *= 4:",a);

a /= 4;
console.log("a /= 4:",a);

a %= 4;
console.log("a %= 4:",a);

a **= 4;
console.log("a **= 4:",a);

// Comparison Operators : used to compare 2 values (==,!=,===,!==,>,>=,<,<=)

console.log("Let's learn about the comparison operators")

let x = 10;
let y = 6;

console.log("x:",x,"y:",y);

console.log("Is  x == y ?",x==y);

console.log("Is  x != y ?",x!=y);

console.log("Is  x >= y ?",x>=y);

console.log("Is  x <= y ?",x<=y);

console.log("Is  x == y ?",x==y);

// Now let's see === and !==, this checks the type of the 2 values being compared. 

/* NOTE: In JS if you compare a string and a num value and if they are both same, it will return true, bcoz JS implicitly convert the string value to a num value and then compare it, so if we want the two different data type values not to be compared together we use equal to & type operator. */

let m = "45";
let n = 45;

console.log("m:",m,"n:",n);
console.log("m is a string value here whereas n in a num value")
console.log("m == n:",m==n);
console.log("m === n:",m===n,", It is false bcoz here the data type is compared as well");
console.log("m !== n:",m!==n,", It is true bcoz the data type and the values both don't match");