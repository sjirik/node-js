
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'address',
    },
    {
      type: 'input',
      message: 'What is your project`s name?',
      name: 'projName',
    },
    {
      type: 'input',
      message: 'What is a short description of your project?',
      name: 'description',
    }, 
    {
      type: 'input',
      message: 'What kind of license should your project have?',
      name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install',
      }, 
      {
        type: 'input',
        message: 'What commmand should be run to run tests?',
        name: 'test',
      }, 
      {
        type: 'input',
        message: 'What does user need to know about using your repo?',
        name: 'use',
      }, 
      {
        type: 'input',
        message: 'What does user need to know about contributing to your repo?',
        name: 'contribute',
      }, 
  ])


.then((response) =>
  {let userPage = `
  Owner of Repo = 

        ${response.username}

  Repo Title =

        ${response.projName} 
  
  License =
  
        ${response.license}
  
  Project Description =

        ${response.description}


  Table of Contents =
  
  *[Installation](#installation)

  *[Usage](#usage)
  
  *[Contributing](#contributing)
  
  *[Tests](#tests)
  
  *[Questions](#questions)

  ## Installation:
  To install dependencies, run the command = 
  
            ${response.install}

  ## Usage:
  Tips for usage = 
            
            ${response.use}
  
  ## Contributing:
  How to properly contribute to this repo =

            ${response.contribute}

  ## Tests:
  To run tests, run the command =

            ${response.test}


  ## Questions:
  Any questions can be directed to =
            ${response.address}

  
   `;
    fs.appendFile('README.md', userPage, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  )}
  )

