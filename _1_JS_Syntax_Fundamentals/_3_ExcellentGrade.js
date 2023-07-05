function solve(num) {

    const grade = Number(num);

    let result;

    if (grade >= 5.50) {
        result = "Excellent";
    } else {
        result = "Not excellent";
    }

    console.log(result);
}

solve(4.4);