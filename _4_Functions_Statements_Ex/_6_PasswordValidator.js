function validate(password) {
    let result = "";
    let isValid = true;

    const getCharAscii = (char) => char.charCodeAt(0);

    let arr = password.split("");

    if (arr.length <= 6 || password.length >= 10) {
        result += "Password must be between 6 and 10 characters\n";
        isValid = false;
    }

    let regexCheck = arr.filter(x => (/[a-zA-Z0-9]/).test(x));
    if (regexCheck.length !== password.length) {
        result += "Password must consist only of letters and digits\n";
        isValid = false;
    }

    regexCheck = arr.filter(x => /^\d$/.test(x));
    if (regexCheck.length < 2) {
        result += "Password must have at least 2 digits\n";
        isValid = false;
    }

    if (isValid) {
        result += "Password is valid";
    }

    console.log(result);
}

validate('MyPass123');