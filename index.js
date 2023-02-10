// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project name: ",
    },
    {
        type: "input",
        name: "description",
        message: "Tell me what is the projects purpose: ",
    },
    {
        type: "input",
        name: "license",
        message: "Choose one of the licenses for you project if applicable: Apache 2.0 MIT N/A ",
        
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install this project: ",
    },
    {
        type: "input",
        name: "usage",
        message: "For the project, enter usage details: ",
    },
    {
        type: "input",
        name: "contributing",
        message: "If there were any contributers to your project list them: ",
    },
    {
        type: "input",
        name: "test",
        message: "Tell me how to run a test on this project: ",
    },
    {
        type: "input",
        name: "github",
        message: "List your GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "List your email as a point of contact: ",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        if (error) {
          return console.log(error);
        }
        console.log("You have created your Professional README.md!");
      });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers)
        writeToFile("README.md", markdown);
        console.log("Creating your Professional README.md File");
      });
};

// Function call to initialize app
init();
