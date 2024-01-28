const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
let minAge = ages[0];
let maxAge = ages[ages.length - 1];

// Find the median age
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    medianAge = ages[(ages.length - 1) / 2];
}

// Find the average age
let sum = ages.reduce((a, b) => a + b, 0);
let averageAge = sum / ages.length;

// Find the range of the ages
let range = maxAge - minAge;

// Compare the value of (min - average) and (max - average)
let minAverageDiff = Math.abs(minAge - averageAge);
let maxAverageDiff = Math.abs(maxAge - averageAge);

console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
console.log(`Median age: ${medianAge}`);
console.log(`Average age: ${averageAge}`);
console.log(`Range of ages: ${range}`);
console.log(`Difference between min age and average age: ${minAverageDiff}`);
console.log(`Difference between max age and average age: ${maxAverageDiff}`);