function checkAge(input) {

    let result = ""
    if (age <= 2 && age >= 0) {
        result = "baby";
    } else if (age <= 13 && age >= 3) {
        result = "child";
    } else if (age <= 14 && age >= 19) {
        result = "teenager";
    } else if (age <= 20 && age >= 65) {
        result = "adult";
    } else if (age >= 65) {
        result = "elder";
    } else {
        result = "Out of bounds!"
    }

    console.log(result);
}