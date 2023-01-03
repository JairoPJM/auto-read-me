// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  ## Table of contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  (Github)-https://github.com/ 
  (VScode)-https://code.visualstudio.com/ 
  (google)-https://www.google.com/ 
  (w3school)-https://www.w3schools.com/

  ## License
  ${data.license}

  ## Questions
  If you have any questions you can email me using this email
  ${data.email}

  https://github.com/${data.questions}


`;
}

module.exports = generateMarkdown;
