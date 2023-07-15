function solve(arr) {
  class Employee {
    constructor(name, pNum) {
      this.name = name;
      this.pNum = pNum;
    }

    print() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.pNum}`);
    }
  }

  let employees = [];

  for (const employee of arr) {
    let pNum = employee.length;
    let currEmployee = new Employee(employee, pNum);
    employees.push(currEmployee);
  }

  for (const employee of employees) {
    employee.print();
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
