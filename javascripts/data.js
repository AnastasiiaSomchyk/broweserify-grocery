const loadDepartments = require('./departments');
const printToDom = require('./dom');

let departmentsArray = [];

const whenDepartments = function () {
  departmentsArray = JSON.parse(this.responseText).departments;
  console.log(departmentsArray);
  printToDom(departmentsArray);
};

const badDepartments = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartments, badDepartments);
};

const getDepartments = () => {
  return departmentsArray;
};

module.exports = {
  initializer,
  getDepartments,
};
