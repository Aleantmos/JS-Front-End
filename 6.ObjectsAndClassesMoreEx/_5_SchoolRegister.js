function manageInfo(input) {

    let students = [];

    for (let i = 0; i < input.length; i++) {
        let currStudentInfo = input[i].split(", ");

        let name = currStudentInfo[0].split(": ")[1];

        let grade = currStudentInfo[1].split(": ")[1];

        let average = currStudentInfo[2].split(": ")[1];

        let student = new Student(name, grade, average);

        students.push(student);
    }

    let successfulls = [];
    let flunks = [];

    students.forEach((student) => {
        if (student.averageScore >= 3) {
            student.grade++;
            successfulls.push(student);
        } else {
            flunks.push(student);
        }
    })

    successfulls.sort((a, b) => a.grade - b.grade);

    let studentsGrouped = groupBy(successfulls, "grade");

    for (let i = 0; i < 4; i++) {
        let output = "";
        let currGroup = studentsGrouped[i];

        output += `${currGroup[0].grade} Grade\n`;

        let names = currGroup.map((student) => student.name);

        output += "List of studets: "

        output += names.join(", ") + "\n";

        let averageForGrade =
            studentsGrouped[i].reduce((total, student) => total + student.averageScore, 0) / currGroup.length;

        output += `Average annual score from last year: ${averageForGrade.toFixed(2)}\n`;

        console.log(output);

    }

    /* for (let i = 0; i < successfulls.length; i++) {
        let output = "";

        let student = successfulls[i];

        if (student.grade !== currGrade) {
            currGrade = student.grade;
            output += `${currGrade} Grade\n`;
        }

        let inGrade = [];

        successfulls
            .filter(student => student.grade === currGrade)
            .map(student => inGrade.push(student.name));


        output += inGrade.join(", ") + `\n`;

        let average = successfulls
            .filter(student => student.grade === currGrade)
            .reduce((total, student) => {
                total += student.average;
                total /= student.length;

                return total
            });

        output += `Average annual score from last year: ${average.toFixed(2)}\n`;
    }
    */



}

function groupBy(objectArr, property) {
    return objectArr.reduce((acc, obj) => {
        let key = obj[property];

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(obj);
        return acc;
    })
}

class Student {
    constructor(name, grade, averageScore) {
        this.name = name;
        this.grade = grade;
        this.averageScore = averageScore;
    }
}
manageInfo([

    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",

    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",

    "Student name: George, Grade: 8, Graduated with an average score: 2.83",

    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",

    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",

    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",

    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",

    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",

    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",

    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",

    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",

    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"

])