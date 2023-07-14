function solve(n) {
    
  let result = "";
  if (n === 100) {
    console.log("100% Complete!");
  } else {
    result = "[";
    for (let i = 0; i < 100; i += 10) {
      if (i < n) {
        result += "%";
      } else {
        result += ".";
      }
    }

    result += "]";

    console.log(n.toString() + "% " + result);
    console.log("Still loading...");
  }
}

solve(100);
