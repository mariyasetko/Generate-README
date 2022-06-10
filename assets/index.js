// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown } = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title?",
        name: "title",
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "motivation",
    }, 
    {
        type: "input",
        message: "Why did you build this project?",
        name: "why",
    },     
    {
        type: "input",
        message: "What problem does it solve?",
        name: "problem",
    },     
    {
        type: "input",
        message: "What did you learn?",
        name: "learn",
    },     
    {
        type: "input",
        message: "What are the instructions for installation?",
        name: "install",
    },     
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
    },     
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "credits",
    },     
    {
        type: "list",
        message: "Select your license.",
        name: "license",
        choices: [
            "MIT",
            "GNU GPLv3",
            "None"
        ]
    },   
]

// Function to write README file
function writeToFile(response) {
    const license = response.license;
    const fileName = `${response.title}.md`;
    renderLicenseBadge(license);
    renderLicenseLink(license);
    renderLicenseSection(license);
    fs.writeFile(`${fileName}`, generateMarkdown(response), (err) => err ? console.log(err) : console.log('Success!'));
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile(response);
    })
}
// Function call to initialize app
init();
