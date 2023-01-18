function calculateBMI(weight, height) {
  if (height <= 0) {
    showErrorHeight.innerHTML = "height must be greater than zero";
    return 0;
  }
  showErrorHeight.innerHTML = "";
  return weight / ((height / 100) * (height / 100));
}

function getWeight() {
  if (weightInput.value == "") {
    return null;
  }
  return weightInput.value;
}

function getHeight() {
  if (heightInput.value == "") {
    return null;
  }
  return heightInput.value;
}

function calculateBMIShow() {
  console.log("calculating...");
  const weight = getWeight();
  const height = getHeight();
  if (weight && height) {
    const bmi = calculateBMI(weight, height).toFixed(4);
    if (bmi != 0.0000){
      showCalculateBMI.innerHTML = `<h3>Your BMI is</h3><h2 class='text-6xl'>${bmi}</h2>`;
      showErrorCalculateBMI.innerText = "";
    }
  } else {
    showCalculateBMI.innerHTML = "";
    showErrorCalculateBMI.innerHTML = "<h4>Please try to input again.</h4>";
  }
}

function resetCalculateBMI() {
  weightInput.value = "50";
  heightInput.value = "150";
  showCalculateBMI.innerHTML = "";
  showErrorCalculateBMI.innerText = "";
}

calculateButton.addEventListener("click", calculateBMIShow);
resetButton.addEventListener("click", resetCalculateBMI);
