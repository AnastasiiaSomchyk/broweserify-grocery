const loadDepartments = require('./departments');

let departmentsArray = [];

const whenDepartments = function () {
  departmentsArray = JSON.parse(this.responseText).departments;
  console.log(departmentsArray);
};

const badDepartment = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartments, badDepartment);
};

const getDepartments = () => {
  return departmentsArray;
};

module.exports = {
  initializer,
  getDepartments,
};
