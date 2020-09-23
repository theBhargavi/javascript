// actual function
var myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};

//rewritten function
const myConcat = (arr1, arr2) => arr1.concat(arr2);

// function call
console.log(myConcat([1, 2], [3, 4, 5]));
