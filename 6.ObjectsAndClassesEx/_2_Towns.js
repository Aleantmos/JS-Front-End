function townsParses(input) {
    
    let towns = [];

    for (const line of input) {
        let [ town,latitude, longitude ] = line.split(" | ");
        let townObj = { town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)}
        
        towns.push(townObj)
    }

    for (let town of towns) {
        console.log(town);
    }
}

townsParses(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])