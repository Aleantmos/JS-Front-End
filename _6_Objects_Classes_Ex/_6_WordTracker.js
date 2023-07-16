function solve(input) {
  let words = input.shift().split(" ");
  let db = input;
  let result = [];

  for (let i = 0; i < words.length; i++) {
    result[words[i]] = 0;
  }

  for (let i = 0; i < db.length; i++) {
    if (db[i] in result) {
      result[db[i]]++;
    }
  }

  result.sort((a,b) => a-b);

  let sortedByCnt = Object.entries(result).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of sortedByCnt) {
    console.log(`${key} - ${value}`);
  }
}

  

  



solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
