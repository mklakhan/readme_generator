const inquirer = require("inquirer")
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
function userPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your project title?",
            name: 'title'
        },
        {
            type: 'input',
            message: "What is the description of your project?",
            name: 'description'
        },
        {
            type: 'input',
            message: "What are the steps required to install your project?",
            name: 'installation'
        },
        {
            type: 'input',
            message: "What are the instructions for use?",
            name: 'usage'
        },
        {
            type: 'input',
            message: "List any credits for this project (eg. collaborators, creators of third-party assets or tutorials).",
            name: 'credits'
        },
        
        {
            type: 'input',
            message: "Add any applicable license(s) to your project.",
            name: 'license',
        
        }
    ])
    .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.log(err))
}

userPrompt()