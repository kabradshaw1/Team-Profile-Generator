
const special = (github, officeNumber, school) => {
  if (github) {
    return `
    GitHub: <a href="https://github.com/${github}">${github}<a>
    `
  } else if (officeNumber) {
    return `
    Office number: ${officeNumber}
    `
  } else if (school) {
    return `
    School: ${school}
    `
  } else {
    return 
  }
}

// This takes the array of objects and runs through them with the map method to generate
// the dynamic html section.  The part that was only for each role I did in a if statement 
// in the function i named special.  This is pretty similar to the portfolio generator.
const generateEmployee = employees => {
    return `
      ${employees
        .map(({name, id, email, role, github, officeNumber, school}) => {
          return `
            <div class = "card" style="width:200px">
              <h4 class="card-title ml-3 mt-2"> ${name} <br>
                ${role}</h3>
              <p class="card-text ml-3 mb-2 mt-2 ">
                ${id}<br>
                Email: <a href="mailto:${email}">${email}</a> <br>
                ${special(github, officeNumber, school)}
              </p>
          </div>
          `
        })
        .join('')
      }
    `
  }

  // This lays out the majority of the html content with the the section that is dynamic
  // added by the function it calls.  Just passing through the array of objects here
module.exports = (employees) => {
  return `
  <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <header class="text-center bg-secondary" style="height: 55px; margin-bottom: 20px">
        <h1>My Team</h1>
      </header>
      <main class="container d-flex flex-row justify-content-center">
        ${generateEmployee(employees)}
      </main>
      
    </body>
    </html>
  `
}

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab 