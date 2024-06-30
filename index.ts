import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance =  10000;
let myPin = 1234;

// print welcome message
console.log("Welcome to Code With Imran - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (pinAnswer.pin === myPin){
console.log("Pin is Correct, Login Successfully!");
console.log(`Current Account Balance is ${myBalance}`)

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation:",
        choices: ["Withdraw","fast cash","Check Balance"]
    }
]) 


if(operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to Withdraw:"
        }
    ])
    
    if(amountAns.amount > myBalance){
        console.log("Insufficient Balance"); 
     }
    else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw successfully`);
        console.log(`Your Remaining Balance is ${myBalance}`)
    }
}
else if(operationAns.operation === "fast cash"){
    let fast = await inquirer.prompt(
        [
            {
                name: "fastcash",
                message: "Select the amount which you withdrawal",
                type: "list",
                choices:[1000, 2000, 5000, 10000]
            }
        ]
    );
 myBalance -=fast.fastcash;
    console.log(`you have successfully withdrawal ${fast.fastcash} /nyour remaining balance is ${myBalance}`)
}

else if(operationAns.operation === "check balance") {
    console.log(`your remaining balance is ${myBalance}`)}


 }
    else {
    console.log("Incorrect pin code");
}