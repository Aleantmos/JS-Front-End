function SignCheck(n1, n2, n3) {
    myNums = [n1, n2, n3];

    let negativeCnts = 0;

    myNums.forEach(element => {
        if (element < 0) {
            negativeCnts++;        
        }
    });

    let result = "";
    if (negativeCnts % 2 == 0) {
        result = "Positive";
    } else {
        result = "Negative";
    }

    console.log(result);
}

SignCheck(5,12,-15);