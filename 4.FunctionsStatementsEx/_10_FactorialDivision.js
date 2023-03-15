function factorial(n1, n2) {

    let arr = [n1, n2];


    let total = 0;

    let cnt = 0;

    while (cnt < arr.length) {
        let f1 = 1;

        for (let index = arr[cnt]; index > 0; index--) {

            let curr = index;

            f1 = f1 * curr;
        }

        if (cnt % 2 == 1) {
            total = total / f1;

        } else {
            total = total + f1;
        }
        cnt++;
    }

    console.log(total);
}

factorial(6, 2);