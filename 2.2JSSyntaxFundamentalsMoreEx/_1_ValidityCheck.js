function checkValidity(x1, x2, y1, y2) {

    let zero = [0, 0];

    let x = [x1, x2];

    let y = [y1, y2];

    let cooridanatesContainer = [x, y];

    let output = 0;
    for (let index = 0; index < cooridanatesContainer.length; index++) {
        let current = cooridanatesContainer[index];

        let result = (Math.pow(current[0], 2) - Math.pow(zero[0], 2)) +
            (Math.pow(current[1], 2) - Math.pow(zero[1], 2));

        output = Math.sqrt(result);

        if (Number.isInteger(output)) {
            console.log(`{${current[0]}, ${current[1]}} to {${zero[0]}, ${zero[1]}} is valid`)
        } else {
            console.log(`{${current[0]}, ${current[1]}} to {${zero[0]}, ${zero[1]}} is invalid`)
        }
    }

    let result = (Math.pow(x[0], 2) - Math.pow(y[0], 2)) +
        (Math.pow(x[1], 2) - Math.pow(y[1], 2));


    if (Number.isInteger(output)) {
        console.log(`{${x[0]}, ${x[1]}} to {${y[0]}, ${y[1]}} is valid`)
    } else {
        console.log(`{${x[0]}, ${x[1]}} to {${y[0]}, ${y[1]}} is invalid`)
    }


}

checkValidity(3, 0, 0, 4);