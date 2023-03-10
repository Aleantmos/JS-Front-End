function palindrome(...arr) {

    let myArr = arr[0];

    let elementsCnt = myArr.length;
    while (elementsCnt > 0) {

        let currNum = myArr[myArr.length - elementsCnt];

        let arrOfDigits = currNum.toString().split("")

        let palindrome = "";
        for (let index = arrOfDigits.length; index > 0; index--) {
            let digit = arrOfDigits[index - 1];

            palindrome = palindrome + digit;
        }

        if (Number(palindrome) === currNum) {
            console.log(true)
        } else {
            console.log(false);
        }

        elementsCnt--;
    }
}

palindrome([32,2,232,1010])