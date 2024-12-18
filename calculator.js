const readline = require("readline-sync");

function prompt(message){
  console.log(`=>${message}`);
}

function isInvalid(num){
  return num.trim() === "" || Number.isNaN(num);
}

prompt("Enter the first number: ");
let number1 = readline.question();

while(isInvalid(number1)){
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt("Enter the second number: ");
let number2 = readline.question();

while(isInvalid(number2)){
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
 let operation = readline.question();

 while(![1,2,3,4].includes(Number(operation))){
  prompt("Humm please enter the correct number");
  operation = readline.question();
 }

 let output;
 switch(operation){
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
 }

 prompt(`The result ${output}`);