class Employee {
  constructor(data) {
    this.name = data;
    this.id = data.id;
    this.email = data.email;
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