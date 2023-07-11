function add(n1, n2, n3) {
  let result = subtract(n1 + n2, n3);

  console.log(result);

  function subtract(num1, num2) {
    return num1 - num2;
  }
}

add(23, 6, 10);
