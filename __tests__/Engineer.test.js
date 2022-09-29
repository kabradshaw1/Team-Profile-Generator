const Engineer = require('../lib/Engineer.js');

test('get GitHub user name', () => {
  const engineer = new Engineer('Kyle')
  engineer.github = 'kabradshaw1';

  expect(engineer.github).toBe('kabradshaw1');
});

test('returns stored github user name', () => {
  const engineer = new Engineer('Kyle')
  engineer.github = 'kabradshaw1';

  expect(engineer.getGithub()).toEqual('kabradshaw1');
});

test('makes sure role is changed to engineer', () => {
  const engineer = new Engineer('Kyle');
  
  expect(engineer.getRole()).toBe('Engineer');
})
// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'