// TODO: Include packages needed for this application
const fs= require('fs');
const inquirer=  require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Enter title"
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter Description"
    }, 
    {
        type: 'input',
        name: 'installation',
        message: "Enter Installation Description"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter Usage description"   
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Enter Contribution description"   
    },
    {
        type: 'input',
        name: 'tests',
        message: "Enter Tests"  
    },
    {
        type: 'list',
        name: 'license',
        message: "Pick the license type",
        choices: [
            'Apache 2.0',
            'The MIT license',
            'Creative Commons'
        ]
    },
    {
        type: 'input',
        name: 'userName',
        message: "Enter Github Username"  
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter Email"  
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            let fileName= 'READMEtest.md';
            writeToFile(fileName, answers);
            
        })
        .catch( error => {
            if(error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
              } else {
                console.log(error);// Something else went wrong
              }
        })
}

// Function call to initialize app
init();
