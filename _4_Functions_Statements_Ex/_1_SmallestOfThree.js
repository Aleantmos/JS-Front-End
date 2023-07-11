function solve(n1, n2, n3) {
  let arr = [n1, n2, n3];

  let sorted = arr.sort((a, b) => a - b);

  let smallest = sorted[0];

  console.log(smallest);
}

solve(600, 342, 123);
