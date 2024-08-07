// Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
// arithmetic operators.

function calculateCircleArea(radius) {
    const pi = Math.PI;
    let area = pi * radius * radius; 
    return area;
}


let radius = 10;


let area = calculateCircleArea(radius);

console.log("Radius: " + radius + " units");
console.log("Area of the circle: " + area.toFixed(2) + " square units"); // Rounding to 2 decimal places
