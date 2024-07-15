// // IN ANY ANYTING ISPOSSIBLE
// let a: any 
// // console.log(a.length);
// // console.log(a.tofixed());
// // IN UNKNOWN YOU HAVE TO NARROW THE TYPE YOU WANT
// let b: unknown
// console.log(typeof b);
// b = "abcd"
// if(typeof b === "string"){
//     console.log(b.length);
// }
// // never
// type user = "standard" |"admin" | "paidUser"
// function login(user: user) {
//     switch(user){
//         case "standard":
//             console.log()
//             break;
//         case "admin":
//         console.log(true)  
//         break ;
//         default:
//          const unreachAble: never = user 
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
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// scrambledArray.unshift(scrambledArray.pop() ?? '', ...scrambledArray.splice(2,4).slice(-2) );
console.log(scrambledArray.splice(-2));
// console.log(scrambledArray.pop());
// console.log(scrambledArray.join(' '));
