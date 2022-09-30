// creates Employee objects.  Never actually used the methods because I
// couldn't figure out how and they are are pretty easy to reference the stored values
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