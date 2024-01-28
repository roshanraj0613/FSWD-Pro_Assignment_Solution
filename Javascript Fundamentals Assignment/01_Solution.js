function outerFunction(outerVariable) {
    let outerLocalVariable = 'I am outside!';

    // This is the inner function
    return function innerFunction() {
        console.log('Outer Variable:', outerVariable);
        console.log('Outer Local Variable:', outerLocalVariable);
    }
}

let innerFunc = outerFunction('I am passed to outer!');
innerFunc();