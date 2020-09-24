/* REST PARAMETERS - 
    With the rest parameter, you can create functions that take a variable number of arguments. */
    function howMany(...args) {
        return "You have passed " + args.length + " arguments.";
      }
      console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
      console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

/* SPREAD OPERATOR - 
      ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. */
      const arr = [6, 89, 3, 45];
      const maximus = Math.max(...arr); //returns 89
      let arr2;
      arr2 = [...arr]; //copies the arr to arr2

/* DESTRUCTURING ASSIGNMENT - 
      is special syntax introduced in ES6, for neatly assigning values taken directly from an object. */
            