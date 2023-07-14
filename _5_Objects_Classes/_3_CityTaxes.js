function cityTaxes(name, population, treasury) {
  let city = {
    name : name,
    population : population,
    treasury : treasury,
    taxRate : 10,
  };
  city.collectTaxes = () =>
    city.treasury += Math.round(city.population * city.taxRate);

  city.applyGrowth = (perc) =>
    (city.population += Math.round(city.population * perc / 100));

  city.appyRecession = (perc) =>
    city.treasury -= Math.round(city.treasury * perc / 100);

  return city;
}




const city =
 cityTaxes1('Tortuga',
 7000,
 15000);
console.log(city);


function cityTaxes1(...list) {
    return {
        name: list.shift(), population: list.shift(), treasury: list.shift(), taxRate: 10,

        collectTaxes: function () {
            this.treasury += this.population * this.taxRate
        },

        applyGrowth: function (percentage) {
            this.population *= 1 + (percentage / 100)
        },

        applyRecession: function (percentage) {
            this.treasury *= 1 - (percentage / 100)
        }
    }
}

const city1 =
 cityTaxes1('Tortuga',
 7000,
 15000);
console.log(city1);

