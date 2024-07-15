"use strict";
// So, what are unions?
// In simple words it is used to give choices in types.
Object.defineProperty(exports, "__esModule", { value: true });
let fruit = "Banana";
let fruitOrQuantity = 89;
// ---------------------------------> TYPE NARROWING <----------------------------------
// HERE IS A SPECIAL Scenario.......
function Length(value) {
    //typeof 
    if (typeof value === "string") {
        console.log(value.length);
    }
}
Length(10.8430182309481203984);
let abc = "abcdef";
// THE CORRECT VERSION AND USAGE OF TYPEOF KEYWORD
// function length(value: string | number){
//     if(typeof value === "string"){        // typeof also called type Guard according to documentation
//         console.log(value.length);
//     }
//     else {
//         console.log(value, "this is the number data");
//     }
// }
// length("we are studying type Narrowing")
// --------------------------------------> LITERAL TYPES <-----------------------------------------------------
// So, what is Literal at first place? val of variable.
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
function hello() {
    return null;
}
// console.log(hello())
// -------------------------------> TRUTHINESS <--------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing
// NOTE: Truthiness is "BEHAVIOR" of TS, it consider the following values as "false"
// 0        //All these values are also called "falsy values"
// NaN
// "" 
// 0n 
// null
// undefined
// false
//HERE IS A SIMPLE PROOF:
let a = 0;
if (a) {
    console.log("You have entered in the if block");
}
