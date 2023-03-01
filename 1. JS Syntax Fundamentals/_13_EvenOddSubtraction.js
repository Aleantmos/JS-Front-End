function evenOddSubtraction(inputArr) {

    let evenSum= 0;
    let oddSum = 0;

    for (let index = 0; index < inputArr.length; index++) {
        if (inputArr[index] % 2 == 0) {
            evenSum += inputArr[index];
        } else {
            oddSum += inputArr[index];
        }
    }

    let result = evenSum - oddSum;
    console.log(result);

}

evenOddSubtraction([2,4,6,8,10]);