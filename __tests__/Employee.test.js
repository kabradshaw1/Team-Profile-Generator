const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Kyle');
  employee.name = 'Kyle'
  employee.id = 1;
  employee.email = 'test@gmail.com';
  employee.role = 'employee'
  expect(employee.name).toBe('Kyle');
  expect(employee.id).toBe(1);
  expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
  expect(employee.role).toEqual(expect.stringContaining(employee.role.toString()));
});

test('get name from employee', () => {
  const employee = new Employee('Kyle');
  employee.name = 'Kyle';
  expect(employee.getName()).toEqual('Kyle');
});

test('get id from employee', () => {
  const employee = new Employee('Kyle');
  employee.id = 1;
  expect(employee.getId()).toBe(1);
});

test('get email from employee', () => {
  const employee = new Employee('Kyle');
  employee.email = 'test@gmail.com';
  expect(employee.getEmail()).toBe('test@gmail.com')
});

test('get role from employee', () => {
  const employee = new Employee('Kyle');
  employee.role = 'Employee';
  expect(employee.getRole()).toBe('Employee')
});
// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'