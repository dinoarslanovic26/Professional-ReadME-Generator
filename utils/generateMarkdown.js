// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';;
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      default:
        return "";
        
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';;
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      default:
        return "";
        
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string : 
function renderLicenseSection(license) {
  return license !== 'none' ? `The license used: ${license}` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents 
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}
  ## Questions
  If you have any questions about anything in this repository please feel free to reach out via

 
 GitHub: [${data.github}] (https://github.com/${data.github}) 
 Email: ${data.email}`;
  
}

module.exports = generateMarkdown;
