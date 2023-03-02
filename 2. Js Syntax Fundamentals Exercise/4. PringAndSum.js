function printAndSum(start, end) {

    let sum = 0;
    let arr = [];
    for (let index = start; index <= end; index++) {
        const element = index;
        sum += index;
        arr.push(element);
    }

    console.log(...arr)
    console.log("Sum: " + sum);
}

printAndSum(5, 10)