function calculateTax(income) {
    let rate;
    if (income <= 10000) {
        rate = 0.1; 
        // 10% tax for income <= 10000
    } else if (income <= 20000) {
        rate = 0.2; 
        // 20% tax for income <= 20000
    } else {
        rate = 0.3; 
        // 30% tax for income > 20000
    }

    return function() {
        return income * rate;
    };
}

// Use the function
let tax1 = calculateTax(5000)();
console.log(`The tax for income 5000 is ${tax1}.`); 
// Outputs: The tax for income 5000 is 500.

let tax2 = calculateTax(15000)();
console.log(`The tax for income 15000 is ${tax2}.`); 
// Outputs: The tax for income 15000 is 3000.

let tax3 = calculateTax(25000)();
console.log(`The tax for income 25000 is ${tax3}.`); 
// Outputs: The tax for income 25000 is 7500.