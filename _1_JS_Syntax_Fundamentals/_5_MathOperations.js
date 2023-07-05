function solve(n1, n2, operation) {
  let result;

  switch (operation) {
    case "+":
        result = n1 + n2;
      break;
    case "-":
        result = n1 - n2;
      break;
    case "*":
        result = n1 * n2;
      break;
    case "/":
        result = n1 / n2;
      break;
    case "%":
        result = n1 % n2;
      break;
    case "**":
        result = n1**n2;
      break;
  }

  console.log(result);
}


