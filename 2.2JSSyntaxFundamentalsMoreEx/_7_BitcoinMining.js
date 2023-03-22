const levExhange = 67.51;
const bitcoinExchange = 11949.16;

let totalInLev = 0;    
let bitcoinsBought = 0;
let dayOfTheFirstBitcoin = 0;

function mine(mined) {
    
    let daysMining = mined.length;
    let cnt = 0;

    while (cnt < daysMining) {
        let goldMined = 0;
        goldMined += mined[cnt];
        if ((cnt + 1) % 3 == 0) {
            goldMined *= 0.7;
        }

        totalInLev += goldMined * levExhange;

        while (totalInLev > bitcoinExchange) {
            if (dayOfTheFirstBitcoin === 0) {
                dayOfTheFirstBitcoin = cnt + 1;
            }

            totalInLev -= bitcoinExchange;
            bitcoinsBought++;
            
        }
        goldMined = 0;
        cnt++;
    }

    let BITCOIN_PRINT_FORMAT = `Bought bitcoins: ${bitcoinsBought}`;
    let BITCOIN_FIRST_PURCHASE_FORMAT = `Day of first purchased bitcoin: ${dayOfTheFirstBitcoin}`;
    let MONEY_LEFT_FORMAT = `Left money: ${totalInLev.toFixed(2)} lv.`;

    console.log(BITCOIN_PRINT_FORMAT);
    console.log(BITCOIN_FIRST_PURCHASE_FORMAT);
    console.log(MONEY_LEFT_FORMAT);
}


mine ([3124.15, 504.212, 2511.124])