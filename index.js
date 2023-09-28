// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
		type: 'list',
		name: 'license',
		message: 'Choose a license for your application:',
		choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) throw err
		console.log('README.md has been created')
	})
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		writeToFile('README.md', generateMarkdown(answers))
	})
}

// Function call to initialize app
init()
