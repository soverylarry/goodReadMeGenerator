
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const axios = require("axios")

require("dotenv").config()




const questions = [{
    type: "input",
    name: "username",
    message: "What's your GitHub username?"
},
{
    type: "input",
    message: "Please enter your Project Title",
    name: "title"
},
{
    type: "input",
    message: "Please enter your Project Description",
    name: "description"
},
{
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
    default: "npm i"
},
{
    type: "input",
    message: "Please enter usage instructions",
    name: "usage"
},
{
    type: "list",
    message: "Please list applicable licenses?",
    name: "license",
    choices: ["GPL 3.0", "BSD 3", "MIT", "None"]
},
{
    type: "input",
    message: "Enter collaborators on this project",
    name: "collab"
},
{
    type: "input",
    message: "Please enter testing requirements",
    name: "testing"
},
{
    type: "input",
    message: "Please enter your email address",
    name: "email"
},
{
    type: "input",
    message: "Please enter your github image?",
    name: "picture"
}
];

function writeToFile(fileName, data) {
}


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
    inquirer.prompt(questions).then(inQresponse => {
        console.log(inQresponse);
        const userName = inQresponse.username

        axios.get(`https://api.github.com/users/${userName}`)
            .then(questions => {
                console.log(questions.data);
                writeToFile("README.md", generateMarkdown({ ...inQresponse, ...questions }))

            });
        generateMarkdown(inQresponse)
    });
}

init();

