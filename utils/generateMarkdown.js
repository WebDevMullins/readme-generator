//  Get license badges
function renderLicenseBadge(license) {
	if (license === 'MIT') {
		return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
	} else if (license === 'Apache 2.0') {
		return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
	} else if (license === 'GPL 3.0') {
		return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
	} else if (license === 'BSD 3-Clause') {
		return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
	} else {
		return ''
	}
}
//  Show license in table of contents
function renderLicenseLink(license) {
	if (license !== 'None') {
		return `- [License](#license)`
	} else {
		return ''
	}
}
//  Show license section
function renderLicenseSection(license) {
	if (license !== 'None') {
		return `## License
		
This project is licensed under the ${license} license.
		
${renderLicenseBadge(license)}`
	} else {
		return ''
	}
}
//  Display all data
function generateMarkdown(data) {
	const licenseBadge = renderLicenseBadge(data.license)
	const licenseLink = renderLicenseLink(data.license)
	const licenseSection = renderLicenseSection(data.license)
	return `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${licenseLink}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any additional questions, please reach out -

GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})

Email: ${data.email}
`
}

module.exports = generateMarkdown
