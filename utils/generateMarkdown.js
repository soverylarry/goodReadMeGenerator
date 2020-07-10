function generateMarkdown(data) {
  return `
# GitHub Username: ${data.username}
# Project Title: ${data.title}
# Project Description: ${data.description}
# Installation Requirements: ${data.install}


//where HTML will go for layout
`;
}

module.exports = generateMarkdown;


//