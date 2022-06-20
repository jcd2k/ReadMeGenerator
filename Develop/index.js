// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const create = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe the application:",
        name: "description",
    },
    {
        type: 'input',
        message: 'How do you use the application?',
        name: 'howTo'
    },
    {
        type: "input",
        message: "How do you install the application?",
        name: "installation",
    },
    {
        type: "input",
        message: "Are there guidelines to follow?",
        name: "contribution",
    },
    {
        type: "input",
        message: "How was the application tested?",
        name: "test",
    },
    {
        type: "list",
        message: "Which license is being used?",
        name: "license",
        choices: ["MIT","GPLv2", "GPLv3", "Apache", "Boost"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {return console.error(err);}
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((responses) => {
        console.log("user responses", responses)
        writeToFile('ReadMe.md', responses);
        if (err) {return console.error(err);}
    });
}

// Function call to initialize app
init();
