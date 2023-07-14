function solve(input) {
    class Town {
        constructor(name, area, population, country, postCode) {
            this.name = name;
            this.area = area;
            this.population = population;
            this.country = country;
            this.postCode = postCode;
        }
    }

    let town = new Town(input.name, input.area, input.population);

    for (const key in town) {
        console.log(`${key} -> ${town[key]}`)
    }
}

solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
   })