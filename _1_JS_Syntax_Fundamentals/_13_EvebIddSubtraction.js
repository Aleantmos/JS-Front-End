function solve(input) {

    let evenSum = 0;
    let oddSum = 0;

    input.forEach(element => {
        if (element % 2 == 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    });

    let result = evenSum - oddSum;

    console.log(result);
}

solve([3,5,7,9])