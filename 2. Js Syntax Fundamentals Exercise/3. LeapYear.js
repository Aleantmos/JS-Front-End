function leap(year) {
    let leapYear = false;

    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        leapYear = true;
    } 

    if (leapYear) {
        console.log("yes")
    } else {
        console.log("no");
    }
}

leap(1984);
