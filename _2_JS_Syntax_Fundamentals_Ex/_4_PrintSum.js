function solve(num1, num2) {
  let sum = 0;

  let result = "";

  for (let i = num1; i <= num2; i++) {
    result = result + i + " ";
    sum = sum + i;
  }

  console.log(result.trim());
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
