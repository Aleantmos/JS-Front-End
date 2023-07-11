function solve(grade) {
  let result = "";

  if (grade < 3) {
    result = "Fail";
    grade = Math.floor(grade);
  } else if (grade < 3.5) {
    result = "Poor";
  } else if (grade < 4.5) {
    result = "Good";
  } else if (grade < 5.5) {
    result = "Very good";
  } else {
    result = "Excellent";
  }

  if (result === "Fail") {
    grade = Math.floor(grade);

  } else {
    grade = grade.toFixed(2);
  }
  console.log(result + ` (${grade})`);
}

solve(3.33);
