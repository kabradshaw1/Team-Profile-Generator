class Employee {
  constructor(name = '') {
    this.name = name.name;
    this.id = name.id;
    this.email = name.email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role
  }
}

module.exports = Employee