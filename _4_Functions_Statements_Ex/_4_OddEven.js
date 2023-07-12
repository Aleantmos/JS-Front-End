function solve(digit) {
    const result = (arr) => {
    
    let oddSum = 0;
    let evenSum = 0;

    [...(arr + " ")]
      .map((x) => +x)
      .forEach((x) => (x % 2 === 0 ? (evenSum += x) : (oddSum += x)));

    console.log(
      `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    );
  };
  result(digit);
}

solve(1000435)
