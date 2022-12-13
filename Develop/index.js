// TODO: Include packages needed for this application

const inquirer  = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is your Project's title ?",
    "Provide a description of your project",
    "Provide Installation Instructions",
    "Provide User Information",
    "Provide Contribution Guidelines",
    "Provide Test Instructions ",
    "What License is used for the application (if applicable) ?",
    "what is your GitHub user name ?",
    'What is your email ?'
];

 inquirer
   .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
          },
          {
            type: 'input',
            name: 'description',
            message: questions[1],
          },
          {
            type: 'input',
            name: 'installation',
            message: questions[2],
          },
          {
            type: 'input',
            name: 'user-info',
            message: questions[3],
          },
          {
            type: 'input',
            name: 'contribution',
            message: questions[4],
          },
          {
            type: 'input',
            name: 'test',
            message: questions[5],
          },
          {
            type: 'input',
            name: 'license',
            message: questions[6],
          },
          {
            type: 'input',
            name: 'github',
            message: questions[7],
          },
          {
            type: 'input',
            name: 'email',
            message: questions[8],
          },

    ])

const generateReadMe = () =>
`
#title

##table of contet
## table of content
  * [](#your-task)
  * [User Story](#user-story)



`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
