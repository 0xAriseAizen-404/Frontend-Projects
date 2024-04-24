const BMIResult = document.getElementById("resultBMI");
const result = document.getElementById("resultBMIDes");
document.getElementById("submitBtn").addEventListener("click", () => {
  const height = document.getElementById("heightId").value;
  const weight = document.getElementById("weightId").value;
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  console.log(bmi, height, weight);
  if (bmi < 18.6) {
    result.innerHTML = `Your are <span>Under Weight</span>`;
    result.querySelector("span").style.color = "red";
  } else if (bmi >= 18.6 && bmi < 24.9) {
    result.innerHTML = `Your are <span>Normal</span>`;
    result.querySelector("span").style.color = "green";
  } else {
    result.innerHTML = `Your are <span>Over Weight</span>`;
    result.querySelector("span").style.color = "red";
  }
  BMIResult.innerHTML = bmi;
});
