// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
.then((response) =>
  {let userPage = `
  <h1>Owner of Repo:<h1> 
  ${response.username}
  <h1>Repo Title:<h1>
  ${response.projName} 
  <h2>License:<h2>
  ${response.license}
  <h2>Project Description:<h2>

        ${response.description}


  <h2>Table of Contents:<h2>
  <ul>*Installation
  *Usage
  *Contributing
  *Tests
  *Questions<ul>

  *Installation:
  To install dependencies, run the command = 
  
            ${response.install}

  *Usage:
  Tips for usage = 
            
            ${response.use}
  
  *Contributing:
  How to properly contribute to this repo =

            ${response.contribute}

  *Tests:
  To run tests, run the command =

            ${response.test}


  *Questions:
  Any questions can be directed to =
            ${response.address}

  
   `;
    fs.appendFile('README.md', userPage, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  )}
  )

// TODO: Create a function to initialize app


// Function call to initialize app

