// creates Engineer objects.  Never actually used the methods because I
// couldn't figure out how and they are are pretty easy to reference the stored values
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