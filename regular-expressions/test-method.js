/* Regular expressions are used in programming languages to match parts of strings. 
   You create patterns to help you do that matching. */
   let testStr = "freeCodeCamp";
   let testRegex = /Code/;
   testRegex.test(testStr); // Returns true

   // You can search for multiple patterns using the alternation or OR operator: |.
   let petString = "James has a pet cat.";
   let petRegex = /dog|cat|bird|fish/; // Change this line
   let result = petRegex.test(petString);

   // Ignore case while matching
   let myString = "freeCodeCamp";
let fccRegex = /FreeCodeCamp/i; // 'i' flags that the system needs to ignore the case
let result = fccRegex.test(myString);