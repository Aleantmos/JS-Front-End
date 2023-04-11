function solve(input) {

    // let employees = {};

    // for (const data of input) {
    //     let pN = data.length;
    //     let name = data;
    //     employees[name] = pN;
    // }

    // for (const key in employees) {
    //     console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    // }

    let employees = [];

    for (const data of input) {
     
        let pN = data.length;
        let name = data;

        let employee = {
            fullName: name,
            personalNumber: pN,
        }

        employees.push(employee);
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.fullName} -- Personal Number: ${employee.personalNumber}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)