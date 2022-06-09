// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, renderLicenseLink, enderLicenseSection } = require(Develop/utils/generateMarkdown.js);

// TODO: Create an array of questions for user input
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
] //dummy code for writeFile, to revise
//.then((response) =>
//fs.writeFile('log.txt', JSON.stringify(response), (err)) ,
 // err ? console.error(err) : console.log('Saved!')
//);

// TODO: Create a function to write README file
function writeToFile(response) {
    const fileName = $`{response.title}.md`
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
    //then((response) => {
        //writeToFile(response);
    }//)
//}
// Function call to initialize app
init();
