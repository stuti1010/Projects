 
// index.js
class Employee {
    constructor(empNumber, empName, empSalary) {
        this.empNumber = empNumber;
        this.empName = empName;
        this.empSalary = empSalary;
    }

    printDetails() {
        console.log(`Employee Number: ${this.empNumber}`);
        console.log(`Employee Name: ${this.empName}`);
        console.log(`Employee Salary: ${this.empSalary}`);
    }
}

module.exports = Employee;