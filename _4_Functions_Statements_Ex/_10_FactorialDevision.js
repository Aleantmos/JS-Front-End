function solve(n1, n2) {

    fact1 = factorial(n1)
    fact2 = factorial(n2);
    

  console.log((fact1/fact2).toFixed(2));

  function factorial(n1, n2) {
    if (n1 === 1) {
      return 1;
    }

    return n1 * factorial(n1 - 1, n2);
  }
}

solve(5, 2)


