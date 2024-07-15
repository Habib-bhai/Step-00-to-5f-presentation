// 1.JSON Objects and Syntax

interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

const jsonString = '{"name":"Alice","age":30,"address":{"street":"123 Main St","city":"Wonderland"}}';
const person: Person = JSON.parse(jsonString);

 QUESTION: Identify and fix any potential issues in the code above.

___________________________________________________________________________________________________
// 2.Type Annotations: Write a function that takes two numbers as arguments and returns their sum. Annotate the function parameters and return type using TypeScript.

_____________________________________________________________________________________________
// 3. Type & Assignability Errors

let x: number;
x = "Hello";
  QUESTION: What is the error here and how can it be fixed?

___________________________________________________________________________________________________
5. const PI = 3.14;
PI = 3.14159; 

 QUESTION: What error does this line produce and why?
______________________________________________________________________________________________________

6. Native ECMAScript Modules (ESModules)

typescript
Copy code
  "module1.ts"
export const greeting = "Hello, World!";

  "module2.ts"
import greeting from './module1';

console.log(greeting); 
Question: Identify and fix any issues in the code above. Also exlain the reason of the error(if there is any)

__________________________________________________________________________________________________

7. Inquirer

import inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'What is your name?',
  },
]).then(answers => {
  console.log(`Hello, ${answers.username}`);
});

QUESTION: How can you validate that the username is not empty before proceeding?
_____________________________________________________________________________________________________

8. Literal Types: Create a function that takes a day of the week (string) as an argument and returns a message depending on the day. Use literal types to represent the possible weekdays.
______________________________________________________________________________________________________

9. Structural Typing: Define an type for a product object with propertie i.e id (number), name (string), and price (number). Create a product object that adheres to the above type structure but has additional properties (e.g., description: string). Explain how TypeScript uses structural typing to ensure the type of product object conforms to the product object.

_______________________________________________________________________________________________________________

10. Imagine you're building a product management system. Here's a scenario that incorporates various TypeScript concepts:

1.  Product Interface: Define a comprehensive interface called Product that represents a product in your system. Include properties for:

id (number) - Unique identifier for the product
name (string) - Product name
description (string) - Detailed description of the product
price (number) - Price of the product
category (string) - Category the product belongs to (e.g., "electronics", "clothing")
stock (number) - Current stock level
reviews (array of objects) - An array of user reviews, where each review object has properties for rating (number) and comment (string) (Optional Property)
isActive (boolean) - Whether the product is currently active for sale
2.  Product Functions: Create functions to manage products:

addProduct(product: Product): This function takes a Product object and adds it to the system (assuming you have a data storage mechanism). Implement type checking to ensure the product argument adheres to the Product interface.
getProductById(id: number): This function takes a product ID and returns the corresponding product object from the system. Use type annotations for the parameter and return type.
updateProductStock(id: number, newStockLevel: number): This function takes a product ID and a new stock level and updates the stock for that product. Implement type checks for parameters.
3.  Utilizing Different Concepts:

Use unions/literals for the category property to limit valid category options.
Implement type aliases for frequently used types like Review.
Use optional properties for the reviews property to handle products without reviews.
Demonstrate type narrowing to access specific properties within the reviews array based on the existence of reviews.