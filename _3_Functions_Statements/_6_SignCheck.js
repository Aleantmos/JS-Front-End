function solve(num1, num2, num3) {
  let arr = [num1, num2, num3];

  let negativeCnt = 0;

  arr.forEach((x) => (x < 0 ? negativeCnt++ : negativeCnt));

  if (negativeCnt % 2 == 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

solve(5, 12, -15);
