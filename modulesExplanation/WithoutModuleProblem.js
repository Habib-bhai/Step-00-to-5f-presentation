// class person {
//         name: string
//         age: number
//         constructor(name: string, age: number) {
//             this.name = name
//             this.age = age
export {};
//     }
//     introduce() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
//     }
// }
// let response1 = new person("Habib", 18)
// response1.introduce()
// class Product {
//         name: string
//         price: number
//         category: string
//         constructor(name: string, price: number, category: string) {
//             this.name = name
//             this.price = price
//             this.category = category    }
//     discountedPrice(percentage: number) {
//             let discountPercent = percentage / 100
//             return (discountPercent * this.price)
//     }
// }
// let response2 = new Product("T-shirt", 100, "merchandise")
// console.log(response2.discountedPrice(50))
// class vehicle {
//         make: String
//         model: String
//         constructor(make: String, model: String) {
//             this.make = make
//             this.model = model
//     }
// }
// class car extends vehicle {
//         numDoors: Number | Number
//         constructor(make: String, model: String) {
//             super(make, model)
//             this.numDoors = 2 || 4
//     }
//     vehicleInfo(): void {
//             console.log(`The car has ${this.numDoors} Doors, with ${this.make} body and Model ${this.model}`);
//     }
// }
// let response3 = new car("metal", "Ferrari")
// response3.vehicleInfo()
// interface Drivable {
//         drive(): void
// }
// class Bike implements Drivable {
//         drive(): void {
//             console.log("The bike is being ridden")
//     }
// }
// let response = new Bike
// response.drive()
// class extendCar extends car {
//         constructor(make: string, model: string) {
//             super(make, model)
//     }
//     vehicleInfo(): void {
//             console.log("Overriding this method, means it already exists in its parent class");
//             console.log(`The car has ${this.numDoors} Doors, with ${this.make} body and Model ${this.model}`);
//     }
// }
// let response4 = new extendCar("carbonFibre", "Bugatti")
// response4.vehicleInfo()
// interface one {
//         hello(): void
// }
// interface two {
//         hello(): void
// }
// class conflictProving implements one, two {
//         hello(): void {
//             console.log("Hello world");
//     }
// }
// let answer = await inquirer.prompt({
//         name: "userInput",
//         type: "list",
//         choices: ["Create Account", "Deposit Amount", "Withdraw"],
//         message: "Hello Sir! What would you like to Do?"
// })
// let accountNumberGenerator = "0123456789"
// let account = ""
// let depositAmount
// let withdrawalAmount
// let passwordStoringVariable: number | string;
// class BankAccount {
//         private accountNumber: number
//         private balance: number
//         constructor(accountNum: number, balance: number) {
//             this.accountNumber = accountNum
//             this.balance = balance
//     }
//     public async deposit(): Promise<void> {
//             let amount = 0
//             console.log("Verify your identity");
//             let verification = await inquirer.prompt([
//                 {
//                     name: "accountNum",
//                     type: "number",
//                     message: "Enter your account number"
//             },
//                 {
//                     name: "PasswordVerification",
//                     type: "password",
//                     message: "Enter your password"
//             }
//         ])
//         if (verification.PasswordVerification === passwordStoringVariable) {
//                 amount = amount + this.balance
//                 console.log(`You have deposited ${this.balance} in to your account SUCCESSFULLY`);
//         }
//         else {
//                 console.error("There is a mistake in your account number or password ");
//         }
//     }
//     public async withdraw(): Promise<void> {
//             let amount = 0
//             console.log("Verify your identity");
//             let verification = await inquirer.prompt([
//                 {
//                     name: "accountNum",
//                     type: "number",
//                     message: "Enter your account number"
//             },
//                 {
//                     name: "PasswordVerification",
//                     type: "password",
//                     message: "Enter your password"
//             }
//         ])
//             if (verification.PasswordVerification === passwordStoringVariable) {
//                 amount = amount + this.balance
//                 console.log(`You have deposited ${this.balance} in to your account SUCCESSFULLY`);
//         }
//         else {
//                 console.error("There is a mistake in your account number or password ");
//         }
//     }
// }
// //Variable for loop's conditional evaluation.
// let evaluation = false
// do {
//         if (answer.userInput === "Create Account") {
//             let details = await inquirer.prompt([
//                 {
//                     name: "accountHolderName",
//                     type: "input",
//                     message: "Enter your full Name"
//             },
//                 {
//                     name: "acoountHoldersEmail",
//                     type: "input",
//                     message: "Enter your email address"
//             },
//                 {
//                     name: "Password",
//                     type: "password",
//                     message: "Create an strong Password!"
//             }
//         ])
//             for (let i = 0; i <= 10; i++) {
//                 account += accountNumberGenerator[Math.floor(Math.random() * 10)]
//         }
//         console.log(`Your Account number is: ${account} \n Your password is: ${details.Password}\n KEEP THEM SAVE AND REMEMBER THE PASSWORD`);
//         passwordStoringVariable = details.Password
//         let continueOrNot = await inquirer.prompt({
//                 name: "ContinueOrNot",
//                 type: "confirm",
//                 message: "Do you want to do anything else."
//         })
//             if (continueOrNot.ContinueOrNot === "yes") {
//                 evaluation = false
//         }
//         else {
//                 evaluation = true
//         }
//     }
//     else if (answer.userInput === "Deposit Amount") {
//             let DepositInfo = await inquirer.prompt({
//                 name: "deposit",
//                 type: "number",
//                 message: "Enter amount to deposit"
//         })
//             depositAmount = DepositInfo.deposit
//         let accountNumInNumberType = Number(account)
//             let response = new BankAccount(accountNumInNumberType, depositAmount)
//             response.deposit()
//     }
//     else if (answer.userInput === "Withdraw") {
//             let withdrawalInfo = await inquirer.prompt({
//                 name: "withdraw",
//                 type: "number",
//                 message: "Enter amount to withdraw"
//         })
//             withdrawalAmount = withdrawalInfo.withdraw
//         let accountNumInNumberType = Number(account)
//             let response = new BankAccount(accountNumInNumberType, withdrawalAmount)
//             response.withdraw()
//     }
// } while (evaluation == false)
//     let passwordStoringVariable1: string;
// class BankAccount {
//         private accountNumber: number;
//         private balance: number;
//         constructor(accountNum: number, balance: number = 0) {
//             this.accountNumber = accountNum;
//             this.balance = balance;
//     }
//     public async deposit(): Promise<void> {
//             console.log("Verify your identity");
//             let verification = await inquirer.prompt([
//                 {
//                     name: "accountNum",
//                     type: "number",
//                     message: "Enter your account number"
//             },
//                 {
//                     name: "PasswordVerification",
//                     type: "password",
//                     message: "Enter your password"
//             }
//         ]);
//         if (verification.PasswordVerification === passwordStoringVariable && verification.accountNum === this.accountNumber) {
//                 let depositInfo = await inquirer.prompt({
//                     name: "deposit",
//                     type: "number",
//                     message: "Enter amount to deposit"
//             });
//             this.balance += depositInfo.deposit;
//             console.log(`You have deposited ${depositInfo.deposit}. Your new balance is ${this.balance}.`);
//         } else {
//                 console.error("There is a mistake in your account number or password.");
//         }
//     }
//     public async withdraw(): Promise<void> {
//             console.log("Verify your identity");
//             let verification = await inquirer.prompt([
//                 {
//                     name: "accountNum",
//                     type: "number",
//                     message: "Enter your account number"
//             },
//                 {
//                     name: "PasswordVerification",
//                     type: "password",
//                     message: "Enter your password"
//             }
//         ]);
//         if (verification.PasswordVerification === passwordStoringVariable && verification.accountNum === this.accountNumber) {
//                 let withdrawalInfo = await inquirer.prompt({
//                     name: "withdraw",
//                     type: "number",
//                     message: "Enter amount to withdraw"
//             });
//             if (withdrawalInfo.withdraw <= this.balance) {
//                     this.balance -= withdrawalInfo.withdraw;
//                     console.log(`You have withdrawn ${withdrawalInfo.withdraw}. Your new balance is ${this.balance}.`);
//             } else {
//                     console.error("Insufficient balance.");
//             }
//         } else {
//                 console.error("There is a mistake in your account number or password.");
//         }
//     }
//     public getBalance(): number {
//             return this.balance;
//     }
// }
// async function main() {
//         let evaluation = false;
//         let account = "";
//         let accountNumberGenerator = "0123456789";
//         while (!evaluation) {
//             let answer = await inquirer.prompt({
//                 name: "userInput",
//                 type: "list",
//                 choices: ["Create Account", "Deposit Amount", "Withdraw"],
//                 message: "Hello Sir! What would you like to Do?"
//         });
//         if (answer.userInput === "Create Account") {
//                 let details = await inquirer.prompt([
//                     {
//                         name: "accountHolderName",
//                         type: "input",
//                         message: "Enter your full Name"
//                 },
//                     {
//                         name: "accountHoldersEmail",
//                         type: "input",
//                         message: "Enter your email address"
//                 },
//                     {
//                         name: "Password",
//                         type: "password",
//                         message: "Create a strong Password!"
//                 }
//             ]);
//             for (let i = 0; i < 10; i++) {
//                     account += accountNumberGenerator[Math.floor(Math.random() * 10)];
//             }
//             console.log(`Your Account number is: ${account} \nYour password is: ${details.Password}\nKEEP THEM SAFE AND REMEMBER THE PASSWORD`);
//             passwordStoringVariable = details.Password;
//             let continueOrNot = await inquirer.prompt({
//                     name: "ContinueOrNot",
//                     type: "confirm",
//                     message: "Do you want to do anything else?"
//             });
//             evaluation = !continueOrNot.ContinueOrNot;
//         } else if (answer.userInput === "Deposit Amount") {
//                 let depositAmount = await inquirer.prompt({
//                     name: "deposit",
//                     type: "number",
//                     message: "Enter amount to deposit"
//             });
//             let accountNumInNumberType = Number(account);
//             let response = new BankAccount(accountNumInNumberType);
//             response.deposit();
//         } else if (answer.userInput === "Withdraw") {
//                 let withdrawalAmount = await inquirer.prompt({
//                     name: "withdraw",
//                     type: "number",
//                     message: "Enter amount to withdraw"
//             });
//             let accountNumInNumberType = Number(account);
//             let response = new BankAccount(accountNumInNumberType);
//             response.withdraw();
//         }
//     }
// }
// main().catch((error) => console.error(error));
