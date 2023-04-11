function solve(input) {

    let towns = [];

    for (let i = 0; i < input.length; i++) {
        let [ town, latitude, longitude ] = input[i].split(' | ');

        let townInfo = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        towns.push(townInfo)
    }

    for (let town of towns) {
        console.log(town);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)