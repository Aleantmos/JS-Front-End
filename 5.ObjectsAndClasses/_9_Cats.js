function cats(info) {

    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let index = 0; index < info.length; index++) {
        let catInfo = info[index].split(" ");
        let [name, age] = [catInfo[0], catInfo[1]];

        cats.push(new Cat(name, age))
    }

    for (let cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);