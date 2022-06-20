;// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }
  if (license === "GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`
  }
  if (license === "GPLv3") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  if (license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`
  }
  if (license === "GPLv2") {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (license === "GPLv3") {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "Boost") {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`
  }
  if (license === "GPLv2") {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (license === "GPLv3") {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "Boost") {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  }
  else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `
  <h1 align="center">PROJECT OVERVIEW</h1>

  <h1 align="center">Project title: ${responses.title}</h1>

  <h1 align="center">by ${responses.name}</h1>

  <p>Description: ${responses.description}</p>

  <p>License in use: ${responses.license}</p>

  <p>How to use: ${responses.howTo}</p>

  <p>How to install: ${responses.installation}</p>

  <p>Specifications: ${responses.contribution}</p>

  <p>Method of testing: ${responses.test}</p>
`;
}

module.exports = generateMarkdown;
