function calculateBMI(weight, height) {
  if (height <= 0) {
    return 0;
  }
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
  if (getWeight() && getHeight()) {
    const bmi = calculateBMI(getWeight(), getHeight()).toFixed(4);
    console.log(bmi);
    showCalculateBMI.innerHTML = `<h3>Your BMI is</h3><h2 class='text-6xl'>${bmi}</h2>`;
    showErrorCalculateBMI.innerText = "";
  }
  else {
    console.log("calculating error, please try again");
    showCalculateBMI.innerHTML = "";
    showErrorCalculateBMI.innerHTML = "<h4>Please try again.</h4>"
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
