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
