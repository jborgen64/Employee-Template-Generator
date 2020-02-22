const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require("fs");

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
        type: "list",
        message: "More team members?",
        choices: ["yes","no"],
        name: "more"
    }
  ])
  .then(managerAnswers => {
      const newManager = new Manager (managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
      console.log(newManager);
      if (managerAnswers.more==="yes") {
          roleQuestion();
      } else {
          console.log('ello html');
      }
  })
};

//role questions
function roleQuestion() {
    return inquirer.prompt([
  {
      type: "list",
      message: "what is this employee's role?",
      choices: ["engineer", "intern"],
      name: "role"
  },
])
.then(roleAnswer => {
    if (roleAnswer.role==="engineer") {
        engineerQuestions();
    } else {
        internQuestions();
    }
})
};

//intern questions
function internQuestions() {
    return inquirer.prompt([
  {
      type: "input",
      message: "What's your school?",
      name: "school"
  },
  {
    type: "list",
    message: "More employees?",
    choices: ["yes", "no"],
    name: "more"
},
])
.then(internAnswers => {
    const newIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email,internAnswers.school);
    console.log(newIntern);
    if (internAnswers.more==="yes") {
        roleQuestion();
    } else {
        console.log("hello html")
    }
})
};

//engineer questions
function engineerQuestions() {
    return inquirer.prompt([
  {
      type: "input",
      message: "What's your github?",
      name: "github"
  },
  {
    type: "list",
    message: "More employees?",
    choices: ["yes", "no"],
    name: "more"
},
])
.then(engineerAnswers => {
    const newEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
    console.log(newEngineer);
    if (engineerAnswers.more==="yes") {
        roleQuestion();
    } else {
        console.log("hola html");
    }
})
};

mngrQuestions()







