// So, what are unions?
// In simple words it is used to give/get choices in types.

let fruit: string = "Banana"

let fruitOrQuantity: string | number  = 89



// --------------------------------------> LITERAL TYPES <-----------------------------------------------------

// So, what is Literal at first place? 
// value of a variable is called LITERAL and it can be anything obj, array, function, string, boolean, num etc.


//  When you give a literal( or value) as type then it is called "literal type"


// PRACTICAL SCENARIO OF UNION LITERAL TYPES...

// In this example, lets say I have a store where I sell the products below. So, I want that my user only select one of these Items, he/she doesn't get any other choice then these, in this type of scenario "literal types" will be useful
function cart(product: "shirt" | "pants" | "Watches" | "Shoes"){

    console.log(product , "You wanna buy this");
    
}

cart("Watches")



// val ko as type dena



// ----------------------------> NULL REFERENCES <------------------------------------------

// A null reference is a reference that points to no object or value. In JavaScript and TypeScript, null and undefined represent the absence of a value

// null: Explicitly assigned to indicate "no value."
// undefined: Indicates that a variable has been declared but not assigned a value.


let val: null = null 



function hello(){

    return null
    
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

let a = 0  //we will not be able to enter in the block of if statement, as we know that when the condition is false we are not able to enter in the if statement's body. Because the value in the variable is one of the above values which is considered false. 
// Any value other than the above "falsy" values will be considered true.  
// TRY PUTTING ANY OTHER VALUE IN THE VARIABLE TO VERIFY THAT THE ABOVE VALUES ARE CONSIDERED FALSE.



if(a){

    console.log("You have entered in the if block");
    
}





