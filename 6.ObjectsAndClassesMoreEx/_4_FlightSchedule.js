
class Flight {
    constructor(flightNumber, destination) {
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.status = "Ready to fly";
    }


    changeStatus(change) {
        this.status = change;
    }

}


function manageFlights(input) {

    let flights = input[0]

    let flightArr = [];
    for (let i = 0; i < flights.length; i++) {

        let currFlightInfo = flights[i].split(" ");

        let flightNumber = currFlightInfo[0];
        let destination = currFlightInfo[1];

        let flight = new Flight(flightNumber, destination);

        flightArr.push(flight);
    }

    let cancelledInfo = input[1];

    for (let i = 0; i < cancelledInfo.length; i++) {
        let flightExtraInfo = cancelledInfo[i].split(" ");
        let fNumbersStatusToChange = flightExtraInfo[0];
        let status = flightExtraInfo[1];


        flightArr
            .find(flight => {
                if (flight.flightNumber === fNumbersStatusToChange) {
                    flight.changeStatus(status);
                }});
    }
    


let flightsWithStatusNeeded = input[2][0];


for (let i = 0; i < flightArr.length; i++) {

    if (flightArr[i].status === flightsWithStatusNeeded) {
        console.log(JSON.stringify(flightArr[i]));
    }

}


}
manageFlights([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama',

    'WN4010 New York',

    'WN1173 California',

    'DL2120 Texas',

    'KL5744 Illinois',

    'WN678 Pennsylvania'],

['DL2120 Cancelled',

    'WN612 Cancelled',

    'WN1173 Cancelled'],

['Cancelled']

])

//'SK430 Cancelled'