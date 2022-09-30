const inquirer = require('inquirer')

const prompt = () => {
  inquirer
    .prompt([{
      type: 'checkbox',
      name: 'next',
      message: 'Would you like to add an engineer, intern, or finish:',
      choices: ['Engineer', 'Intern', 'Finish'],}
    ])
    .then(({next}) => {
      console.log(next)
      // if (data.next != 'Finish') {
      //   return prompt()
      // }
    })
}

prompt()