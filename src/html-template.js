const generateEmloyee = aboutEmployee => {
  return `
  <div class = "card">
    <h4 class="card-title">Duder <br>
      Manager</h3>
    <p class="card-text">ID:1 <br>
    Email: <a href="#">test@email.com</a> <br>
    office number
    </p>
  </div>
  </div>
  `
}

module.exports = templateData => {

  const {} = templateData;

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
        ${generateEmloyee()}
      </main>
      
    </body>
    </html>
  `
}

/* <div class = "card">
<h4 class="card-title">Duder <br>
  Manager</h3>
<p class="card-text">ID:1 <br>
Email: <a href="#">test@email.com</a> <br>
office number
</p>
</div> */
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab 