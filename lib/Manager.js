const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name = '') {
    super(name);
    this.officeNumber = name.officeNumber;
    this.role = 'Manager';
  }

  getSchool() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
};

module.exports = Manager;