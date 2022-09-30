// creates Intern objects.  Never actually used the methods because I
// couldn't figure out how and they are are pretty easy to reference the stored values
const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name = '') {
    super(name);
    this.school = name.school;
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