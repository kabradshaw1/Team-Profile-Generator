const Employee = require('./Employee')

class Intern extends Employee {
  constructor(data) {
    super(data);
    this.school = data.school;
    this.role = 'Intern';
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
};

module.exports = Intern;