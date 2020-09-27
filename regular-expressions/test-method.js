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

   // Using match() method to extract the matched string
   "Hello, World!".match(/Hello/); // Returns ["Hello"]
    let ourStr = "Regular expressions";
    let ourRegex = /expressions/;
    ourStr.match(ourRegex); // Returns ["expressions"]

    // Find more than the first match
    let repeatRegex = /Repeat/g; // 'g' flags repeated matches
    testStr.match(repeatRegex); // Returns ["Repeat", "Repeat", "Repeat"]

    // Match Anything with Wildcard Period
    let humStr = "I'll hum a song";
    let hugStr = "Bear hug";
    let huRegex = /hu./gi;
    huRegex.test(humStr); // Returns true
    huRegex.test(hugStr); // Returns true

    // Match Single Character with Multiple Possibilities
    let bigStr = "big";
    let bagStr = "bag";
    let bugStr = "bug";
    let bogStr = "bog";
    let bgRegex = /b[aiu]g/gi;
    bigStr.match(bgRegex); // Returns ["big"]
    bagStr.match(bgRegex); // Returns ["bag"]
    bugStr.match(bgRegex); // Returns ["bug"]
    bogStr.match(bgRegex); // Returns null

    // Match Letters of the Alphabet
    let catStr = "cat";
    let batStr = "bat";
    let matStr = "mat";
    let bgRegex = /[a-e]at/;
    catStr.match(bgRegex); // Returns ["cat"]
    batStr.match(bgRegex); // Returns ["bat"]
    matStr.match(bgRegex); // Returns null

    let firstString = "Ricky is first and can be found.";
    let firstRegex = /^Ricky/;
    firstRegex.test(firstString); // Returns true
    let notFirst = "You can't find Ricky now.";
    firstRegex.test(notFirst); // Returns false

    let longHand = /[A-Za-z0-9_]+/;
   let shortHand = /\w+/;
   let numbers = "42";
   let varNames = "important_var";
   longHand.test(numbers); // Returns true
   shortHand.test(numbers); // Returns true
   longHand.test(varNames); // Returns true
   shortHand.test(varNames); // Returns true