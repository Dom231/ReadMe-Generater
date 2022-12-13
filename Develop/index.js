// TODO: Include packages needed for this application

const inquirer  = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    "What is your Project's title ?",
    "Provide a description of your project",
    "Provide Installation Instructions",
    "Provide Usage Information",
    "Provide Contribution Guidelines",
    "Provide Test Instructions ",
    "What License is used for the application (if applicable) ?",
    "what is your GitHub user name ?",
    'What is your email ?'
];



//this will provide the bage links for the Licenses 

const badge = [
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "  0   "
]


//This will build a frame work for the ReadMe file

const generateReadMe = ({title,instal,description,userinfo,test,Li,bage,github,email}) =>
`
# ${title} 

## ${Li}

## Table of content
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)


## Description

${description}

## Installation  

${instal}


## Usage-Information

${userinfo}

## Test-Instructions

${test}

## Questions

* link to my github:  https://github.com/${github}/
* If you have any questions you can contact me at the following email: ${email}


`;

// this will create the section for the Lisence section
const generateLicense = 
`
## Lisence

The license used in this application is`;

//this will add questions for the user to answer, this information will be used for the ReadMe
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
            name: 'instal',
            message: questions[2],
          },
          {
            type: 'input',
            name: 'userinfo',
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
            type: 'list',
            message: questions[6],
            name: 'Li',
            choices:['MIT','Eclipse','Apache',"No License used"]
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

    // look at notes and see if there is a way to add data to your construct mam
   
       
   
    .then((answers) => { 

        if(answers.Li == 'MIT'){
            answers.Li = badge[0];
           
            
        }else if(answers.Li == 'Eclipse'){
             answers.Li = badge[1];
            
        
        }else if(answers.Li == 'Apache'){
            answers.Li = badge[2]
            
        }else{
            
            answers.Li == badge[3];
        }


       
        const readMeContent = generateReadMe(answers)
       
        fs.writeFile('ReadMe.md', readMeContent, 
        (err) => err ? console.log(err) : console.log('Sucessfuly created ReadMe.md')
        )


        if(answers.Li == badge[0]){
            answers.Li = 'MIT';
           
            
        }else if(answers.Li == badge[1]){
             answers.Li = 'Eclipse';
            
        
        }else if(answers.Li == badge[2]){
            answers.Li = 'Apache'
            
        }else{
            answers.Li == ':No license Used ';
        }

        fs.appendFile('ReadME.md', `${generateLicense +" " +answers.Li}`  , (err) =>
        // TODO: Describe how this ternary operator works
        err ? console.error(err) : console.log('Commit logged!')
      );
      



        

    });
