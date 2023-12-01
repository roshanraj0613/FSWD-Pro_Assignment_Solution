function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

// Example usage:
let weight = 70; // Weight in kilograms
let height = 1.75; // Height in meters

let bmi = calculateBMI(weight, height);
console.log(`The Body Mass Index (BMI) is ${bmi.toFixed(2)}`);

//output : The Body Mass Index (BMI) is 22.86