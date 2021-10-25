// fs to create the document(README.md) and inquirer for the inputs 
const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

let questions = [
    {
        name:"title",
        message:"What is the Project title ? ",
        type:"input"
    },
    {
        name:"description",
        message:"What is the Project description ? ",
        type:"input"
    },
    {
        name:"instalation",
        message:"What is the Project instalation instructions ? ",
        type:"input"
    },
    {
        name:"usage",
        message:"What is the Project usage ? ",
        type:"input"
    },
    {
        name:"contribution",
        message:"What is the Project contribution guidelines ? ",
        type:"input"
    },
    {
        name:"test",
        message:"What is the Project test instructions  ? ",
        type:"input"
    },
    {
        name:"username",
        message:"What is your Github username ? ",
        type:"input"
    },
    {
        name:"email",
        message:"What is your email address ? ",
        type:"input"
    },
    {
        name: "license",
        type: "list",
        message: "Choose your licence:",
        choices: ["Apache", "GNU", "MIT"],
      }
];

// inquirer.prompt(questions).then(function(answer){console.log(answer)});
const createReadMe = data => {
    //This switch case takes the input of the license prompts and assigns a url to the proper license
    let licenseLink = '';
    
    switch(data.license) {      
  
      case 'Apache': licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
      break;
  
      case 'GNU': licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
      break;

      case 'MIT': licenseLink = 'https://choosealicense.com/licenses/mit/';
      break;
  
      default: licenseLink = 'This app has no license.'
    }
    
    //The beginning of the markdown document creation
    return `
  [![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.instalation}
  ## Tests
  ${data.test}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## License
  ### This app is licensed under the [${data.license}](${licenseLink}) license.
  ## Questions
  * GitHub: [${data.username}](https://github.com/${data.username})
  * Email: 
  [${data.email}](mailto:${data.email})
    `
  };
 


  function init(){
    inquirer.prompt(questions)
        .then(function(answer) { writeFileAsync('README.md',createReadMe(answer))})
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
  };

  init();