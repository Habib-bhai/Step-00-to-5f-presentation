// // An object in TypeScript is a collection of properties, where each property has a name (or key) and a value. Objects can be used to group related data and functionality together.


// let laptop = {

//   cpu: "i9",
    // gen: "12th"
// }

// console.log(laptop.cpu); "." is used to access values from objs statically.




// //  Structural Typing in Object Literals

// // .Structural typing is a way of relating types based on their structure. If two types have the same shape, they are considered to be of the same type. TypeScript uses structural typing, meaning it checks if the properties and methods of one type match those of another.

// type a = {
//   userName: string,
//   accountType: "free" | "paid" ,
//   age: number
// }

// let obj: a ={
//   userName: "Barbarian",
//   accountType: "free",
//   age: 18
// }

// type b = {
//   userName: string,
//   accountType: "free"| "paid"
// }

// let obj1: b = {
//   userName: "anees",
//   accountType: "paid"
// }


// obj1 = obj 


// // BENEFITS:   Type Compatibility & Structured programming.

// // TYPE COMPATIBILITY:

// type Person = {
//     name: string;
//     age: number;
//   }
  
  
//   type abc = {
//     name : string,
//     age : number,
//     city: string
//   }

//   const person:abc = {
//     name: "Alice",
//     age: 30,
//     city: "New York" // Additional property
//   };
  
//   // Assign the object to a variable of type Person
//   const myPerson: Person = person



// // DUCK TYPING : see the pr.js for best explanation





// // -------------------------- Type Intersection --------------------------------------

type a = {
  x: string,
  y: string
}

type b = {
  b: string,
  c: string
}

type intersect = b & a  // type INTERSECTION: means I have to give properties of both "a" & "b" necessarily


let obj: (a | b) ={   // type union: means I have choice of giving either one of "a" or "b" or both.
x: "abc",
y: "cba",
}


