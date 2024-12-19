const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
const LANGUAGE = "en";

function prompt(message){
  console.log(`=>${message}`);
}

function isInvalid(num){
  return num.trimStart()==="" || Number.isNaN(Number(num));
}

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

while(true){
  prompt(messages('welcome'));

  prompt("Enter the first number: ");
  let firstnum = readline.question();
  while(isInvalid(firstnum)){
    prompt(messages("isInvalid"));
    firstnum = readline.question();
  }

  prompt("Enter the second number: ");
  let secondnum = readline.question();
  while(isInvalid(secondnum)){
    prompt(messages("isInvalid"));
    secondnum = readline.question();
  }

  prompt("Please enter an operator: \n1 - for addition \n2 - for subtraction \n3 - for multiplication\n4 - for division");
  let operation = readline.question();
  while(![1,2,3,4].includes(Number(operation))){
    prompt("Please enter a valid operation: ");
    operation = readline.question();
  }

  let output;
  switch(operation){
    case '1':
      output = Number(firstnum) + Number(secondnum);
      break;
    case '2':
      output = Number(firstnum) - Number(secondnum);
      break;
    case '3':
      output = Number(firstnum) * Number(secondnum);
      break;
    case '4':
      output = Number(firstnum) / Number(secondnum);
      break;
  }

  console.log(`The output is ${output}`);

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  if(answer !== 'y' ){
    break;
  }


}

