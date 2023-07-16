function solve(arr) {
  let movies = {};

  for (const input of arr) {
    if (input.includes("addMovie")) {
      let mName = input.split("addMovie ")[1];
      movies[mName] = {};
      movies[mName].name = mName;
    } else if (input.includes("directedBy")) {
      let [mName, mDirector] = input.split(" directedBy ");
      if (mName in movies) {
        movies[mName].director = mDirector;
      }
    } else if (input.includes("onDate")) {
      let [mName, mDate] = input.split(" onDate ");
      if (mName in movies) {
        movies[mName].date = mDate;
      }
    }
  }

  for (let [key, value] of Object.entries(movies)) {
    if (
      movies[key].hasOwnProperty("name") &&
      movies[key].hasOwnProperty("director") &&
      movies[key].hasOwnProperty("date")
    ) {
      console.log(JSON.stringify(value));
    }
  }
}

solve([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
