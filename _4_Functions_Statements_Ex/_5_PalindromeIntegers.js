function solve(arr) {
  arr.forEach((num) => {
    if (num.toString() === num.toString().split("").reverse().join("")) {
      console.log(true);
    } else {
      console.log(false);
    }
  });
}

solve([123, 323, 421, 121]);
