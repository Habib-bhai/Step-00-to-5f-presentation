// // IN TYPE "ANY" ANYTING ISPOSSIBLE BECAUSE IT DISABLES TYPESCRIPT'S TYPE CHECKING, THAT IS WHY IT IS NOT PREFFERED

// let a: any 


// // console.log(a.length); // ON SAME VARIABLE "a" WE ARE ABLE TO USE ARRAY METHOD

// // console.log(a.tofixed()); // ALSO THE NUMBER METHOD




// //  TYPE "UNKOWN" IS PREFFERED OVER TYPE ANY, WHEN YOU DON'T KNOW WHAT KIND OF DATA WILL COME IN OUR VARIABLE.IN TYPE "UNKNOWN" YOU HAVE TO NARROW THE TYPE YOU WANT

// let b: unknown = "HABIB"
// console.log( b.toLowerCase());   

// THIS WILL GIVE AN ERROR, SAYING THAT YOU CAN'T PERFORM THIS OPERATION ON TYPE "UNKOWN", WHICH IS IT'S BEHAVIOR AND HELPS MAINTAIN TYPE SAFETY. 


// if(typeof b === "string"){

// WE USE "TYPEOF" TO EXTRACT TYPE FROM A VARIABLE ( WHICH IS INFERRED FROM THE DATA PRESENT IN THE VARIABLE)

//     console.log(b.length);
    
// }





//  TYPE NEVER: type never is used when we have to show a point which is "unreachable", it's purpose is to make type checking more strict or exhaustive type checking,
// Let's understand the following code, to get the concept.

type user = "standard" |"admin" | "paidUser" // we've defined a type alias which has literal types.

// function login(user: user) {  // A FUNCTION WHICH TAKES USER OF TYPE "USER " AS ARGUMENT

//     switch(user){
//         case "standard":
//             console.log()
//             break;
//         case "admin":
//         console.log(true)  
//         break ;

//         default:
//          const unreachAble: never = user   

//NOW THE THING HERE TO UNDERSTAND IS THAT WE'VE ONLY HANDLED 2 CASES "STANDARD" & "ADMIN". SO, WHEN THE USER WILL ENTER TYPE "PAIDUSER" THE COMPILER WILL THROUGH AN ERROR, BECAUSE WHEN THERE IS NO CASE MATCHED THE CONTROL IS TRANSFERED TO "DEFAULT" AND IN DEFAULT THERE IS A VARIABLE OF TYPE "NEVER" WHICH IS ASSIGNED THE USER. THE ERROR WILL BE THROWN BECAUSE WE CANNOT ASSIGN ANY VALUE IN A VARIABLE THAT IS OF TYPE NEVER (BCZ IT REPRESENTS AN UNREACHABLE POINT), AND BY THROWNING ERROR IT MADE OUR TYPECHECKING MORE STRONG AND MADE US AWARE OF THE ERROR BEFORE EVEN WE COMPILED THE PROGRAM. 

//          return unreachAble
//     }
// }

// login("standard")

// // console.log(login("user"))

// // exhaustiveness checking

// // type Shape = 'circle' | 'square';

// // function getArea(shape: Shape): number {
// //   switch (shape) {
// //     case 'circle':
//       return Math.PI * 1 * 1; // assuming radius = 1
//     case 'square':
//       return 1 * 1; // assuming side length = 1
//     default:
//       // Exhaustive check: `shape` should never reach here
//       const _exhaustiveCheck: never = shape;
//       throw new Error(`Unexpected shape: ${_exhaustiveCheck}`);
//   }
// }


// getArea("rectangle")

// function greet(name?: string): void {
    
//     if(!name){
//         name = "guest"
//     }

//     // Nullish Coalescing 
//     const actualName = name ?? "Guest"

//     console.log(`hello, ${actualName}!`);

// }

// greet("Admin")
