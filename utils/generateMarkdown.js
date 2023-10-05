//  Get license badges
function renderLicenseBadge(license) {
	switch (license) {
		case 'MIT':
			return '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)'
		case 'Apache 2.0':
			return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
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
		
This project is licensed under the ${license} license.`
		: ''
}

//  Display all response
function generateMarkdown({
	title,
	description,
	installation,
	usage,
	contributing,
	tests,
	license,
	githubUsername,
	email
}) {
	const licenseBadge = renderLicenseBadge(license)
	const licenseLink = renderLicenseLink(license)
	const licenseSection = renderLicenseSection(license)
	return `
# ${title}

${licenseBadge}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${licenseLink}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

${licenseSection}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any additional questions, please reach out -

GitHub: [${githubUsername}](https://github.com/${githubUsername})

Email: ${email}
`
}

module.exports = generateMarkdown
