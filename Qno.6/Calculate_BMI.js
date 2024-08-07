// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
// height * height.

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}


let weight = 70;
let height = 1.75; 

let bmi = calculateBMI(weight, height);


console.log("Weight: " + weight + " kg");
console.log("Height: " + height + " m");
console.log("Body Mass Index (BMI): " + bmi.toFixed(2)); // Rounding to 2 decimal places


let category;
if (bmi < 18.5) {
    category = "Underweight";
} else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
} else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
} else {
    category = "Obesity";
}


console.log("BMI Category: " + category);
