class Laptop {
    constructor(info, quality) {
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand
        }
        this.isOn = false;
        this.quality = quality;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        const { producer, age, brand } = this.info;
        return { producer, age, brand };
    }

    get price() {
        const { age } = this.info;
        return 800 - age * 2 + this.quality * 0.5;
    }

}

function test() {

    let info = {
        producer: "Dell",

        age: 2,

        brand: "XPS"
    }

    let laptop = new Laptop(info, 10)

    laptop.turnOn()

    console.log(laptop.showInfo())

    laptop.turnOff()

    console.log(laptop.quality)

    laptop.turnOn()

    console.log(laptop.isOn)

    console.log(laptop.price)
}

test();