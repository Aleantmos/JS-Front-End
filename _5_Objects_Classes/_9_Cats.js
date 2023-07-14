function solve(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow = () => {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];
  for (const info of arr) {
    let [ name, age ] = info.split(" ");
    let currCat = new Cat(name, age);
    cats.push(currCat);
  }

  for (const cat of cats) {
    cat.meow();
  }
}

solve(["Candy 1", "Poppy 3", "Nyx 2"]);
