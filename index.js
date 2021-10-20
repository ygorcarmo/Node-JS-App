// fs to create the document(README.md) and inquirer for the inputs 
const fs = require("fs");
const inquirer = require("inquirer");

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
        name: "licence",
        type: "list",
        message: "Choose your licence:",
        choices: ["Apache license 2.0", "GNU General Public License v3.0", "MIT"],
      }
];

inquirer.prompt(questions).then(function(answer){console.log(answer)});