// An object in TypeScript is a collection of properties, where each property has a name (or key) and a value. Objects can be used to group related data and functionality together.








// Strong Typed objects & Type Alias.






//  Structural Typing in Object Literals
// .Structural typing is a way of relating types based on their structure. If two types have the same shape, they are considered to be of the same type. TypeScript uses structural typing, meaning it checks if the properties and methods of one type match those of another.



// BENEFITS:   Type Compatibility & Structured programming.

// TYPE COMPATIBILITY:

type Person = {
    name: string;
    age: number;
  }
  
  
  type abc = {
    name : string,
    age : number,
    city: string
  }

  const person:abc = {
    name: "Alice",
    age: 30,
    city: "New York" // Additional property
  };
  
  // Assign the object to a variable of type Person
  const myPerson: Person = person



// NESTED OBJECTS




// DUCK TYPING
// Duck typing is a concept closely related to structural typing. The principle is "If it looks like a duck and quacks like a duck, it is a duck." In other words, an object's suitability is determined by the presence of certain methods and properties, rather than the actual type of the object.





// -------------------------- Type Intersection --------------------------------------


