const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

//  Questions to ask user
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'Enter the project title:'
	},
	{
		type: 'input',
		name: 'description',
		message: 'Enter a project description:'
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Enter installation instructions:'
	},
	{
		type: 'input',
		name: 'usage',
		message: 'Enter usage information:'
	},
	{
		type: 'list',
		name: 'license',
		message: 'Choose a license for your application:',
		choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
	},
	{
		type: 'input',
		name: 'contributing',
		message: 'Enter contribution guidelines:'
	},
	{
		type: 'input',
		name: 'tests',
		message: 'Enter test instructions:'
	},
	{
		type: 'input',
		name: 'githubUsername',
		message: 'Enter your GitHub username:'
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email address:'
	}
]
// Write all data to the README.md file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		err ? console.log(err) : console.log('README.md has been created')
	})
}
// Start prompt of questions to user and write to file
function init() {
	inquirer.prompt(questions).then((response) => {
		writeToFile('./output/README.md', generateMarkdown(response))
	})
}

// Function call to initialize app
init()
