// seeing different string moethods…

str = "    Apna College";
console.log(str);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.trim());    //trim whitespaces from the start and the end of the str

// slice method - returns a part of the string

str1 = "asdfghjkl";
console.log("str1:",str1);

console.log(str1.slice(1,4)); //In slice method the start and the end index is passed and the end index is always non-exclusive. i.e. the output string will be generated till 3rd index only. If we only pass a single index in the slice value, it will just slice the string from that index and print the remaining string till the end.

console.log("Slicing the str1:", str1.slice(3))

str2 = "qwertyui";

// concatenate method

console.log("str2:",str2);
console.log("Concatinating str1 and str2 below:");
console.log(str1.concat(str2));

// string replace method

let str3 = "You thererere?";
console.log("Original String:",str3);
console.log("Replaced String:",str3.replace("t","w"));
console.log("Replacing 're' in the string:",str3.replace("re", "n"));    //Please note that replace only works on the first case match like if the search value is repeating inside the string passed, it will only be replaced once, to replace all of them we can use `replaceAll` method.

console.log("Replacing all the 're' in the string:",str3.replaceAll("re","n"));

// charAt method

console.log("str3:",str3);
console.log("Accessing the character at the 5th index of str3:",str3.charAt(5));