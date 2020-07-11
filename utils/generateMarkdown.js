//where HTML will go for MD layout

function generateMarkdown(data) {
  return `
# ReadMe-Generator 
![GitHub top language](https://img.shields.io/github/languages/top/soverylarry/goodReadMeGenerator)![GitHub](https://img.shields.io/github/license/soverylarry/goodReadMeGenerator)

## Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command: Node index.JS The user will be prompted for their GitHub username and other information pertaining to the project the README is for and followed by a generated ReadME file.

## The README will be populated with the following:

### * At least one badge
### * Project title
### * Description
### * Table of Contents
### * Installation
### * Usage
### * License
### * Contributing
### * Tests
### * Questions
### * User GitHub profile picture
### * User GitHub email

## GitHub Username:   ${data.username}
## Project Title:     ${data.title}
## Project Description:        ${data.description}
### Installation Requirements: ${data.install}
### Usage:    ${data.usage}
### Licenses: ${data.license}
### Contributors:         ${data.collab}
### Testing Requirements: ${data.testing}
### GitHub pic: <img alt="D'oh!" src="assets/LLBridgeReduced.png">
### To email developer: ${data.email}
`;
}

module.exports = generateMarkdown;


