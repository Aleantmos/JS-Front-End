function solve(age) {
  let personType = "";

  if (66 <= age) {
    personType = "elder";
  } else if (20 <= age) {
    personType = "adult";
  } else if (14 <= age) {
    personType = "teenager";
  } else if (3 <= age) {
    personType = "child";
  } else if (0 <= age) {
    personType = "baby";
  } else {
    personType = "out of bounds";
  }
  console.log(personType);
}

solve(20);
