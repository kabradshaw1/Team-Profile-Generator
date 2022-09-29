// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const fs = require('fs');
const inquirer = require('inquirer');
// const generateHtml = require('./scr/html-template');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')


// const writeFile = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.html', fileContent, err => {
//       // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//       if (err) {
//         reject(err);
//         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//         return;
//       }

//       // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//       resolve({
//         ok: true,
//         message: 'File created!'
//       });
//     });
//   });
// };
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const createManager = () => {
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
    return new Manager(data)
    // Employees.push(Manager(data));
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
    return new Engineer(data)
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
    return new Intern(data)
  })
  

}

const promptNext = () => {
  return inquirer
    .prompt([{
      type: 'checkbox',
      name: 'next',
      message: 'Would you like to add an engineer, intern, or finish:',
      choices: ['Engineer', 'Intern', 'Finish']
    }])
}

createManager()
  .then(promptNext)
  // .then(data => {
  //   console.log(data.choices)
  // })
  .then(data => {
    while (data = { next: [ 'Engineer' ] } || { next: [ 'Intern' ] }) {
      if (data = { next: [ 'Engineer' ] }) {
        console.log(data)
        promptEngineer(data)
        // .then(promptNext);
  
      } else if (data = { next: [ 'Intern' ] }) {
        console.log(data)
        promptIntern(data)
        // .then(promptNext);
      }
    }
  })
  
        // .then(promptNext())
  //     }
  //   }
  // })
  // .then(data => {
  //   // return generateHtml(data);
  //   console.log(data)
  // })
  // .then(pageHtml => {
  //   return writeFile(pageHtml);
  // })
  // .catch(err => {
  //   console.log(err);
  // })