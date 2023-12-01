function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Use the function
console.log(factorial(5));
// Outputs: 120
console.log(factorial(3)); 
// Outputs: 6
console.log(factorial(0)); 
// Outputs: 1