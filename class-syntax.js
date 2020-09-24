/* ------------------------- Use class Syntax to Define a Constructor Function  ------------------------- */
    /* ES6 provides a new syntax to create objects, using the class keyword.
       It should be noted that the class syntax is just syntax, 
       and not a full-fledged class-based implementation of an object-oriented paradigm, 
       unlike in languages such as Java, Python, Ruby, etc. */
/* var SpaceShuttle = function(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
    var zeus = new SpaceShuttle('Jupiter'); */
    class SpaceShuttle {
        constructor(targetPlanet) {
          this.targetPlanet = targetPlanet;
        }
      }
      const zeus = new SpaceShuttle('Jupiter');