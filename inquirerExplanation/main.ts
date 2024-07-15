// Inquirer.js is a powerful library(A library is set of pre-built/pre-defined function made for it's user's ease, so that we don't have to recreate those functions.) for creating interactive command-line interfaces (CLIs). It helps in collecting user inputs in a structured way

import inquirer from "inquirer"


const answer =  await inquirer.prompt({
        name: "userName",
        type: "editor",
        message: "Enter your password"
})








// show the path where type is any
// How we will know that inquirer is installed?

// SYNTAX & there important things to ask in every inquirer prompt (type, name, message)
// And how you will ask multiple questions.

// const answer = await inquirer.prompt({
//     name,
//     type,
//     message: 
// })


