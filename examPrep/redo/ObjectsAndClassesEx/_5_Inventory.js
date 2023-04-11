function inventory(input) {

    let heroes = {};
    for (const data of input) {
        let [ name, level, ...items ] = data.split(' / ');
        heroes[name] = {};
        heroes[name].name = name;
        heroes[name].level = Number(level);
        heroes[name].items = items;
    }

    for(const hero of heroes) {
        console.log(`Hero: ${heroes[hero].name}` +
            `level => ${heroes[hero].level}` +
            `items => ${heroes[hero].items.array.forEach(element => {
                String.join(element, ", ")
            })}`)
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )