const Intern = require('../lib/Intern');

test('check that school is stored', ()=> {
  const intern = new Intern('Kyle');
  intern.school = 'school';

  expect(intern.school).toBe('school');
});

test('check that getSchool returns school', () => {
  const intern = new Intern('Kyle');
  intern.school = 'school';

  expect(intern.getSchool()).toEqual('school');
});

test('check that get role returns intern', () => {
  const intern = new Intern('Kyle');

  expect(intern.getRole()).toEqual('Intern');
});
// school

// getSchool()

// getRole() // Overridden to return 'Intern'