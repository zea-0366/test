function calculateBMI() {
  // Get input values
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  // Basic validation
  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    alert("Please enter valid numbers for weight, height, and age.");
    return;
  }
  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  // Display the result with basic interpretation
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}<br />`;
  // Add logic for age and gender interpretation (example)
  if (gender === "male" && age >= 18 && age >= 30) {
    if (bmi < 18.5) {
      resultDiv.innerHTML += "You are underweight for your age and gender.";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultDiv.innerHTML += "You are within a healthy weight range.";
    } else if (bmi >= 25 && bmi < 30) {
      resultDiv.innerHTML += "You are overweight for your age and gender.";
    } else {
      resultDiv.innerHTML += "You are obese for your age and gender.";
    }
  } else if (gender === "female" && age >= 18 && age >= 30) {
    if (bmi < 18.5) {
      resultDiv.innerHTML += "You are underweight for your age and gender.";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultDiv.innerHTML += "You are within a healthy weight range.";
    } else if (bmi >= 25 && bmi < 30) {
      resultDiv.innerHTML += "You are overweight for your age and gender.";
    } else {
      resultDiv.innerHTML += "You are obese for your age and gender.";
    }
    // Add similar logic for females in this age range
    // ... (Adjust BMI categories as needed)
  }
}