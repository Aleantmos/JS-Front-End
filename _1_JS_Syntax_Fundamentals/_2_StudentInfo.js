function info(name, age, grade) {

    const studentName = name;
    const studentAge = Number(age);
    const studentGrade = Number(grade);

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`);
}

info("Alex", "17", "5.7");