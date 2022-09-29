const Employee = require('./Employee')

class Manager extends Employee {
  constructor(data) {
    super(data);
    this.officeNumber = data.officeNumber;
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