function sums(num) {

    const numsArr = String(num).split("");

    let oddSum = 0;
    let evenSum = 0;

    let cnt = 0;
    while(cnt < numsArr.length) {
        let curr = Number(numsArr[cnt]);

        if (curr % 2 == 0) {
            evenSum += curr;
        } else {
            oddSum += curr;
        }
        cnt++;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

sums(1000435)