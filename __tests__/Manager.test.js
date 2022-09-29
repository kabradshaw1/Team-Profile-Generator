const Manager = require('../lib/Manager');

test('check that office number was stored', () => {
  const manager = new Manager('Kyle');
  manager.officeNumber = 1

  expect(manager.officeNumber).toBe(1)
})

test('check that getRole returns manager', () =>{
  const manager = new Manager('Kyle');
  
  expect(manager.getRole()).toBe('Manager')
})
// officeNumber

// getRole() // Overridden to return 'Manager'