function FormatGrade(grade) {

    let result = "";

    if (grade >= 5.5) {
        result = "Excellent";
    } else if (grade < 5.5 && grade >= 4.5) {
        result = "Very Good";
    } else if (grade < 4.5 && grade >= 3.5) {
        result = "Good";
    } else if (grade < 3.5 && grade >= 3.0) {
        result = "Poor";
    } else {
        result = "Fail";
        grade = 2;
    }

    console.log(`${result} (${grade})`)
}

FormatGrade(2.93);