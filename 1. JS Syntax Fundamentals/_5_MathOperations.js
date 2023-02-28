function mathOps(num1, num2, operator) {
 
    let result = 0;

    switch(operator) {
        case "+": 
        result = num1+num2;
        break;

        case "-": 
        result = num1-num2;
        break;

        case "/": 
        result = num1/num2;
        break;

        case "*": 
        result = num1*num2;
        break;

        case "%": 
        result = num1%num2;
        break;

        case "**": 
        result = num1**num2;
        break;
    }

    if (result == 0) {
        console.log("Invalid operator!")
    } else {
        console.log(result);
    }
}

mathOps(3, 4, "+");