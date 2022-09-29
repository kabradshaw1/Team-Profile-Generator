const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name = '') {
    super(name);
    this.github = name.github
    this.role = 'Engineer';
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
};

module.exports = Engineer;