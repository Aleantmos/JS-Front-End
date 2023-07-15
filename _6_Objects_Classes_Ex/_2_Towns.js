function solve(arr) {
  class Town {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
    }

    print() {
      console.log(`{ town: '${this.name}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
    }
  }

  let towns = [];

  for (const element of arr) {
    let [name, latitude, longitude] = element.split(" | ");

    let townToAdd = new Town(
      name,
      Number(latitude).toFixed(2),
      Number(longitude).toFixed(2)
    );

    towns.push(townToAdd);
  }

  for (const curr of towns) {
    curr.print();
  }
}

solve(['Plovdiv | 136.45 | 812.575']
)
