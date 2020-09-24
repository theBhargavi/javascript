const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  // Template literal with multi-line and string interpolation
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting); // prints
  // Hello, my name is Zodiac Hasbro!
  // I am 56 years old.

/* ------------------------- Write Concise Object Literal Declarations Using Object Property Shorthand  ------------------------- */
    /* const getMousePosition = (x, y) => ({
        x: x,
        y: y
    }); */
    const getMousePosition = (x, y) => ({ x, y });

/* ------------------------- Write Concise Declarative Functions  ------------------------- */
    /* const person = {
        name: "Taylor",
        sayHello: function() {
            return `Hello! My name is ${this.name}.`;
        }
    }; */
    const person = {
        name: "Taylor",
        sayHello() {
          return `Hello! My name is ${this.name}.`;
        }
      };