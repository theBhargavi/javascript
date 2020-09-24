// ------------------------- example ------------------------- 
// actual function
var myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};

//rewritten function
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// ------------------------- pass default parameters -------------------------
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous