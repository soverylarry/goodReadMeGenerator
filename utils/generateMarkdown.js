//where HTML will go for MD layout

function generateMarkdown(data) {
  return `
# ReadMe-Generator 
![GitHub top language](https://img.shields.io/github/languages/top/soverylarry/goodReadMeGenerator)![GitHub](https://img.shields.io/github/license/soverylarry/goodReadMeGenerator)

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


