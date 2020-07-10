//where HTML will go for MD layout

function generateMarkdown(data) {
  return `
  # ReadMe-Generator
<img alt="npm" src="https://img.shields.io/npm/v/fs?style=flat-square">
## GitHub Username: ${data.username}
## Project Title: ${data.title}
## Project Description: ${data.description}
## Installation Requirements: ${data.install}
## Usage: ${data.usage}
## Licenses: ${data.license}
## Contributors: ${data.collab}
## Testing Requirements: ${data.testing}
### GitHub pic: <img src="LL brigde.jpg">
### To email developer: soverylarry@gmail.com

`;
}

module.exports = generateMarkdown;


//