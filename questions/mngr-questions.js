const inquirer = require("inquirer");
const Employee = require("../lib/Employee.js")
//manager questions
function MngrQuestions(){
    return inquirer.prompt([
    {
        type: "input",
        message: "Hi manager! What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your ID?",
        name: "id"
    },
    {
        type: "input",
        message: "what is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "what is your office number?",
        name: "officeNumber"
    },
    {
        type: "input",
        message: "How many team members do you have?",
        name: "teamNumber"
    }
  ])
};

module.exports = MngrQuestions()




