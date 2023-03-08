function sum(num) {

    let total = 0;
    while(num !== 0) {

        let toSum = num % 10;
        total += toSum;

        num = Math.floor(num / 10);
    }

    console.log(total);
}

sum(245678)