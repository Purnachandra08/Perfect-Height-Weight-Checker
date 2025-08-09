function checkPerfect() {
  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  const result = document.getElementById("result");

  if (!age || !height || !weight || !gender) {
    result.textContent = "Please fill all fields!";
    result.className = "result-bad";
    return;
  }

  let minHeight, maxHeight, minWeight, maxWeight;

  if (gender.value === "male") {
    minHeight = age * 5 + 70;
    maxHeight = age * 5 + 85;
    minWeight = age * 2 + 10;
    maxWeight = age * 2 + 25;
  } else {
    minHeight = age * 4.8 + 65;
    maxHeight = age * 4.8 + 80;
    minWeight = age * 1.8 + 8;
    maxWeight = age * 1.8 + 22;
  }

  if (height >= minHeight && height <= maxHeight &&
      weight >= minWeight && weight <= maxWeight) {
    result.textContent = "✅ Perfect height and weight for your age & gender!";
    result.className = "result-good";
  } else {
    result.textContent = "⚠ Not in the perfect range. Consider a healthy diet & exercise!";
    result.className = "result-bad";
  }
}
