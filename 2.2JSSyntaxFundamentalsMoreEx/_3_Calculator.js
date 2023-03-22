function Calculator(num1, command, num2) {

    let result = 0;

    switch (command) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
    }

    console.log(result.toFixed(2));
}

Calculator(5,'+',10)

Calculator(25.5,'-',3)