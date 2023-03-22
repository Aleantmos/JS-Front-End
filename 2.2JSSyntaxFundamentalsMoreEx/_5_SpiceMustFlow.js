let workersDailyYeald = 26;
let workersAdditionalYeald = 26;

function flowTheSpice(yeald) {
    let daysCnt = 0;
    let extracted = 0;

    while(yeald >= 100) {
        daysCnt++;
        extracted += yeald;
        extracted -= workersDailyYeald; 
        yeald -= 10;
    }
    extracted -= workersAdditionalYeald;

    console.log(daysCnt);
    console.log(extracted);
}


flowTheSpice(450);