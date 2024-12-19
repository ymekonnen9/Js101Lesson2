let readline = require("readline-sync");

function prompt(str){
  console.log(`=>${str}`);
}

function isInvalid(num){
  return num.trim() === "" || Number.isNaN(Number(num)) || Number(num) < 0;
}

while(true){

  prompt("Enter the loan amount: ");
  let loanAmount = readline.question();
  while(isInvalid(loanAmount)){
    prompt('Must enter a positive number');
    loanAmount = readline.question();
  }

  prompt("Enter the Annuan Percentage Rate(APR): ");
  prompt("(Example: 5 for 5% or 2.5 for 2.5%)");
  let apr = readline.question();
  while(isInvalid(apr)){
    prompt('Must enter a positive number');
    apr = readline.question();
  }

  prompt("Enter the loan duration in years: ");
  let duration = readline.question();
  while(isInvalid(duration)){
    prompt('Must enter a positive number');
    duration = readline.question();
  }

  let annualInterestRate = Number(apr) / 100;

  let monthlyInterestRate = Number(annualInterestRate)/ 12;

  let loanDurationInMonths = Number(duration) * 12;

  let monthlyPayment = Number(loanAmount) * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

  console.log(`\$${monthlyPayment.toFixed(2)}`);

  prompt("Do you want to calculate again?");
  let response = readline.question().toLowerCase();

  if(response !== "y"){
    break;
  }

}