function validatePassword(password) {

    let chars = password.split("");

    let isLenghty = true;
    let isValid = true;
    let digitCnt = 0;

    for (let index = 0; index < chars.length; index++) {
        let element = chars[index].toLowerCase();


        if (chars.length < 6 || chars.length > 10) {
            isLenghty = false;
        }

        let ascii = element.charCodeAt(0);

        if ((ascii >= 48 && ascii <= 57)) {
            digitCnt++;
        } else if (!(ascii >= 97 && ascii <= 122)) {
            isValid = false;
        }

    }

    if (!isLenghty) {
        console.log("Password must be between 6 and 10 characters")
    } 

    if (!isValid) {
        console.log("Password must consist only of letters and digits")
    }

    if (digitCnt < 2) {
        console.log("Password must have at least 2 digits")
    }

    if (isLenghty && isValid && digitCnt > 2) {
        console.log("Password is valid")
    }
}

validatePassword('MyPass123')

