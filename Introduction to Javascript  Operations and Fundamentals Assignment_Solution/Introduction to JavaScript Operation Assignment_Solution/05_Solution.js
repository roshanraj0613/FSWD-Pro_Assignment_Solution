function calculateSimpleInterest(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

// Example usage:
let principal = 1000; // Principal amount
let rate = 5; // Annual interest rate in percent
let time = 2; // Time in years

let interest = calculateSimpleInterest(principal, rate, time);
console.log(`The simple interest is ${interest}`);