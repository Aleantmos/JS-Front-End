function roadRadar(speed, area) {


    myMap = new Map();

    let limit = 0;


    switch (area) {
        case "motorway":
            
            myMap.set("motorway", 130)
            limit = 130;
            break
        case "interstate":
            myMap.set("interstate", 90)
            limit = 90;
            break
        case "city":
            myMap.set("city", 50)
            limit = 50;
            break
        case "residential":
            myMap.set("residential", 20)
            limit = 20;
            break
    }

    limit = myMap.get(area);

    let status = "";
    speedLimitReached = true;

    if (speed > limit) {
        speeding = speed - limit;

        if (speeding > 40) {
            status = "reckless driving";
        } else if (speeding < 40) {
            status = "excessive speeding";
        } else if (speeding < 20) {
            status = " speeding";
        }
    } else {
        speedLimitReached = false;
    }

    if (speedLimitReached) {
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
}
roadRadar(40, 'city')

roadRadar(21, 'residential')