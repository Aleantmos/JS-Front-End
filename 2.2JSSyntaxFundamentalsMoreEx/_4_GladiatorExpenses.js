let helmetsLostFactor = 2;
let swordLostFactor = 3;
let shieldLostFactor = 6;
let armorLostFactor = 12;

function expenses(fightsLost, helmetPrice, swordPrice, shieldPrice, armorPrice) {


    let info = [];
    const helmetInfo = calculateHelmetExpenses(fightsLost, helmetPrice, helmetsLostFactor, "helmet");
    info.push(helmetInfo);

    fightsLostFactor = swordLostFactor;
    const swordInfo = calculateHelmetExpenses(fightsLost, swordPrice, swordLostFactor, "sword");
    info.push(swordInfo);

    fightsLostFactor = shieldLostFactor;
    const shieldInfo = calculateHelmetExpenses(fightsLost, shieldPrice, shieldLostFactor, "shield");
    info.push(shieldInfo);

    fightsLostFactor = armorLostFactor;
    const armorInfo = calculateHelmetExpenses(fightsLost, armorPrice, armorLostFactor, "armor");
    info.push(armorInfo);

    let total = 0;
    let expenses = []
    for (const itemInfo of info) {

        if (itemInfo[1] > 0) {
            printIt(itemInfo[2], itemInfo[1]);
            expenses.push(itemInfo[0]);
            total += itemInfo[0];
        }
    }

    expenses = expenses.join(" + ");
    console.log(`Total: ${expenses} = ${total} aureus;`);
}

function printIt(item, cnt) {
    let result = `Trashed ${item} -> ${cnt} times`;
    console.log(result);
}

function calculateHelmetExpenses(fightsLost, itemPrice, fightsLostFactor, item) {

    let helmetsNeeded = Math.floor(fightsLost / fightsLostFactor);

    let helmetsExpensesTotal = helmetsNeeded * itemPrice;

    return [helmetsExpensesTotal, helmetsNeeded, item];
}

expenses(7, 2, 3, 4, 5)