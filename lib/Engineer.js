const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(data) {
    super(data);
    this.github = data.github
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