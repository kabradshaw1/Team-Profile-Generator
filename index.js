// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
const generatePage = require('./src/html-template')
let employees = []

// pretty much just copy and pasted this out of the module 8, the portfolio generator.  I
// placed it in the index because that's what the assignment said to do.  They laid out the
// file stucture they said they wanted.
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// These are the prompts that provide the information we used to generate the HTML.  
// I guess who ever made this assignment though it would be easier to start with 
// making these prompt rather than having to make front in applications.  I guess they aslo
// wanted to make us spend time working with the various node tools.
const createManager = () => {
  employees = [];
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name? ',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the manager\'s employee ID? ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the manager\'s email address',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the manager\'s office number',
    },
  ])
  .then(data => {
    return employees.push(new Manager(data))
  })  
}
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineer\'s name? ',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineer\'s employee ID? ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineer\'s email address',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineers\'s gethub',
    },
  ])
  .then(data => {
    employees.push(new Engineer(data));
    return promptNext();
  })
}

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the intern\'s name? ',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the intern\'s employee ID? ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the intern\'s email address',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the intern\'s school',
    },
  ])
  .then(data => {
    employees.push(new Intern(data));
    // console.log(employees);
    return promptNext();
  })
}
// all roads lead here.  This will repeat until Finish is selected and it will go on 
// to run the html template file then the write file at the top.
const promptNext = () => {
  return inquirer
    .prompt([{
      type: 'checkbox',
      name: 'next',
      message: 'Would you like to add an engineer, intern, or finish:',
      choices: ['Engineer', 'Intern', 'Finish']
    }])
    .then(({next}) => {
      if (next == 'Engineer') {
        return promptEngineer()  
      } else if (next == 'Intern') {
        return promptIntern()
      } 
  })
}
// This starts with manager where it clears all objects from the employees variable,
// prompt next leads to functions that go back to prompt next until you say you are done.
// generatePage is the html-template.js file.
createManager()
  .then(promptNext)
  .then(() => {
    return generatePage(employees);
  })
  .then(pageHtml => {
    return writeFile(pageHtml);
  })
  .catch(err => {
    console.log(err);
  })