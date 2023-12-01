function calculateCircleArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
}

// Example usage:
let radius = 10; // Radius of the circle

let area = calculateCircleArea(radius);
console.log(`The area of the circle is ${area.toFixed(2)}`);

//output : The area of the circle is 314.16