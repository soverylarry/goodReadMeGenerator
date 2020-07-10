
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
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
    message: "Enter collaborators with links to their github profile",
    name: "collab"
},
{
    type: "input",
    message: "Please enter testing requirements?",
    name: "testing"
},
{
    type: "input",
    message: "Please enter your email address?",
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

// function fetchUser (username){
//     return axios.get()
// }
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

//requires inquirer for user data, etc.
//fs to make a new file
//path to know folder structure
//const generate markdown = require (generateMarkdown.js) designs ReadME (HTML design inside of JS)
//fuction that makes API call to GitHub username and profile image


//need .env file for API call to GitHub for the above
//need dotenv file
//need fuction to write everything to a file
//need an ask questions file and pulls all together