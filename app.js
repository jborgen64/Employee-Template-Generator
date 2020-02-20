const inquirer = require("inquirer");

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your ID?",
        name: "id"
    },
    {
        type: "input",
        message: "what is your title?",
        name: "title"
    },
    {
        type: "list",
        message: "what is your role?",
        choices: ["employee", "intern", "engineer", "manager"],
        name: "role"
    }
  ])
  .then(answers => {

    console.log(answers.name)
    console.log(answers.id)
    console.log(answers.role)
    console.log(answers.title)

    module.exports = inquirer.answers;
   
});
