function SimpleCalculator(n1, n2, command) {

    let result = 0;

    switch (command) {
        case "add":
            result = n1 + n2;
            break;
        case "subtract":
            result = n1 - n2;
            break;
        case "divide":
            result = n1 / n2;
            break;
        case "multiply":
            result = n1 * n2;
            break;
    }

    console.log(result);
}

SimpleCalculator(5,5,'multiply')