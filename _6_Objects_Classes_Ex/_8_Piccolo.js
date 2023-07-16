function solve(arr) {

    let park = new Set();

    for (const curr of arr) {
        let [command, number] = curr.split(", ");
        
        if (command === "IN") {
            park.add(number);
        } else if (command === "OUT") {
            park.delete(number);
        }
    }

    if (park.size === 0) {
        console.log("Parking Lot is Empty")
    } else {
        console.log([...park].sort().join("\n"));
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])