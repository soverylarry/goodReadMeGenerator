
const FS = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const axios = require("axios")

require("dotenv").config()




const questions = [{
    type: "input", 
    name: "username",
    message: "What's your GitHub username?"
}, {
    //type: ........next question...
}

];

function writeToFile(fileName, data) {
}

function fetchUser (username){
    return axios.get(//GitHub API call)
}

function init() { 
    inquirer.prompt(questions).then(inQresponse=>{
        //call AJAX function to GitHub API
        //writeto file with data we got back
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