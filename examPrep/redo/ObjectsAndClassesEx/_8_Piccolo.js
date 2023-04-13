function solve(input) {

    let parking = {};

    for (const data of input) {

        let tokens = data.split(', ');

        let command = tokens[0];
        let plate = tokens[1];

        let number = plate.substring(2, 6);
        if (command === "IN") {
            parking[plate] = true;

        } else if (command === "OUT") {

            if (plate in parking) {
                delete parking[plate];
            }
        }
    }

    let plates = Object.keys(parking);
    if (plates.length > 0) {
        plates.sort(function (a, b) {
            let aNumber = parseInt(a.substring(2, 6));
            let bNumber = parseInt(b.substring(2, 6));
            return aNumber - bNumber;
        });

        for (const plate of plates) {
            console.log(plate);
        }
    } else {
        console.log('Parking Lot is Empty')
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
    'IN, CA2822UU']
)