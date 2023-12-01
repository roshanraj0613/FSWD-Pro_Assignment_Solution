function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Use the curry function
let curriedAdd = curry(add);
let addFive = curriedAdd(5);
console.log(addFive(3)); 
// Outputs: 8