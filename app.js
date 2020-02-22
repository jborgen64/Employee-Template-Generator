const inquirer = require("inquirer");

//manager questions
    function mngrQuestions() {
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
        message: "More team members?",
        name: "more"
    }
  ])
};

//intern questions
function internQuestions() {
    return inquirer.prompt([
  {
      type: "input",
      message: "What's your school?",
      name: "school"
  },
])
};

//engineer questions
function engineerQuestions() {
    return inquirer.prompt([
  {
      type: "input",
      message: "What's your github?",
      name: "github"
  },
])
};







