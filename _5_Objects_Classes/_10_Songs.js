function solve(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let cnt = arr.shift();

  let songs = [];

  for (let i = 0; i < cnt; i++) {
    let [type, name, time] = arr[i].split("_");

    let song = new Song(type, name, time);
    songs.push(song);
  }

  let typeToPrint = arr[arr.length - 1];

  if (typeToPrint === "all") {
    songs.forEach((song) => {
      console.log(`${song.name}`);
    });
  } else {
    songs
      .filter((song) => song.typeList === typeToPrint)
      .forEach((song) => {
        console.log(`${song.name}`);
      });
  }
}

solve([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
