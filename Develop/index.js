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
        message: "Add credits",
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
    const fileName = `${response.title}.md`;
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


//WORKING CODE FOR fs.writeFile

/*const fileName = `${response.title.toLowerCase().split(' ').join('')}.md`;
    const license = response.license
    renderLicenseBadge(license);
    renderLicenseSection(license, response);
    fs.writeFile(`./assets/${fileName}`, generateMarkdown(response), (err) => err ? console.log(err) : console.log('Success!'))
    */