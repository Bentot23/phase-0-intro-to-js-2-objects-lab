// Write your solution in this file!
let employee = {

}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {employee, key};
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = (employee, key);
    employee.name = undefined;
    return employee;
}