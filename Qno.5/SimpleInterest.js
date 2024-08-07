// Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =
// (principal * rate * time) / 100.

function calculateSimpleInterest(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}


let principal = 1000; 
let rate = 5; 
let time = 2;

let interest = calculateSimpleInterest(principal, rate, time);


console.log("Principal: $" + principal);
console.log("Rate: " + rate + "% per annum");
console.log("Time: " + time + " years");
console.log("Simple Interest: $" + interest);

