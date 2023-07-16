function solve(arr) {
  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }

    print() {
      console.log(
        `Hero: ${this.name}\nlevel => ${this.level}\nitems => ${this.items}`
      );
    }
  }

  let heroes = {};

  for (const element of arr) {
    let [name, level, items] = element.split(" / ");
    
    let hero = new Hero(name, level, items);
    heroes[name] = hero;
  }


  let sortedHeroes = Object.values(heroes).sort((a, b) => a.level - b.level);


  for (let hero of sortedHeroes) {
        hero.print();
  }

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
