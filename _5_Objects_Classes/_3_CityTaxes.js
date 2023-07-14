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

const city = result('Sofia', 2000000, 1000000);
