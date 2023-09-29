//  Get license badges
function renderLicenseBadge(license) {
	switch (license) {
		case 'MIT':
			return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
		case 'Apache 2.0':
			return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
		case 'GPL 3.0':
			return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
		case 'BSD 3-Clause':
			return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
		default:
			return ''
	}
}

//  Show license in table of contents
function renderLicenseLink(license) {
	return license !== 'None' ? `- [License](#license)` : ''
}

//  Show license section
function renderLicenseSection(license) {
	return license !== 'None'
		? `## License
		
This project is licensed under the ${license} license.
		
${renderLicenseBadge(license)}`
		: ''
}

//  Display all response
function generateMarkdown(response) {
	const licenseBadge = renderLicenseBadge(response.license)
	const licenseLink = renderLicenseLink(response.license)
	const licenseSection = renderLicenseSection(response.license)
	return `
# ${response.title}

${licenseBadge}

## Description
${response.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${licenseLink}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

${licenseSection}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
For any additional questions, please reach out -

GitHub: [${response.githubUsername}](https://github.com/${response.githubUsername})

Email: ${response.email}
`
}

module.exports = generateMarkdown
