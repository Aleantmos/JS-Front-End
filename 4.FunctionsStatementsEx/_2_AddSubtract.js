function calculate(n1, n2, n3) {

    let currSum = sum(n1, n2);

    let currDiff = subtract(currSum, n3);

    console.log(currDiff)

}

function subtract(n1, n2) {
    let diff = n1 - n2;
    return diff;
}

function sum(n1, n2) {

    let sum = n1 + n2;
    return sum;
}

calculate(1,17,30)
