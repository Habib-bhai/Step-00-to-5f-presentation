"use strict";
// So, what are unions?
// In simple words it is used to give choices in types.
Object.defineProperty(exports, "__esModule", { value: true });
let fruit = "Banana";
let fruitOrQuantity = 5;
// ---------------------------------> TYPE NARROWING <----------------------------------
// HERE IS A SPECIAL Scenario.......
// function length(value : string | number){
//     console.log(value.length)
// }
// length("We are studying type Narrowing")
// THE CORRECT VERSION AND USAGE OF TYPEOF KEYWORD
function length(value) {
    if (typeof value === "string") { // typeof also called type Guard according to documentation
        console.log(value.length);
    }
    else {
        console.log(value, "this is the number data");
    }
}
// length("we are studying type Narrowing")
// --------------------------------------> LITERAL TYPES <-----------------------------------------------------
// So, what is Literal at first place? val of variable.
// let naam: "Habib" = "TypeScript"
// PRACTICAL SCENARIO OF UNION LITERAL TYPES...
function cart(product) {
    console.log(product, "You wanna buy this");
}
// val ko as type dena
// ----------------------------> NULL REFERENCES <------------------------------------------
// A null reference is a reference that points to no object or value. In JavaScript and TypeScript, null and undefined represent the absence of a value
// null: Explicitly assigned to indicate "no value."
// undefined: Indicates that a variable has been declared but not assigned a value.
let val = null;
let test = undefined;
// -------------------------------> TRUTHINESS <--------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing
// function printLength(value: string | null | undefined) {
//     if (value) { // Narrowing the type based on truthiness
//       console.log("The value is:", value);
//       console.log("The length is:", value.length); // Safe access
//     } else {
//       console.log("The value is null or undefined.");
//     }
//   }
//   printLength("Hello");
//   printLength(null);
//   printLength(undefined);
