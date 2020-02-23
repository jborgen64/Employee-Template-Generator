const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

let teamHTML = "";

//array that will hold all of our employees


// //function that will generate main html
// function generateHTML() {
   
//     return `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
//     <title>SQUAD</title>
// </head>
// <body>
//     <nav class="navbar navbar-warning bg-warning">
//         <span class="navbar-brand mb-0 h1">My Team</span>
//       </nav>

//       <div id="employeeContainer"></div>

//       <script src="https://code.jquery.com/jquery.js"></script>
//       <script src="app.js"></script>
// </body>
// </html>
//   `;
//   }

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
  .then(data => {
      //creating new manager object
      const manager = new Manager (data.name, data.id, data.email, data.officeNumber);

    const teamMember = fs.readFileSync("templates/manager.html");

    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');

      if (data.more==="yes") {
          roleQuestion();
      } else {
        const mainHTML = fs.readFileSync("templates/main.html");

        teamHTML = eval('`'+ mainHTML +'`');

        fs.writeFile("output/team.html", teamHTML, function(err) {

            if (err) {
                return console.log(err);
            } {

            console.log("success");
        }
      });

      };
  });

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
            message: "Hi intern! What is your name?",
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
.then(data => {

    //creating new intern object
    const intern = new Intern(data.name, data.id, data.email, data.school);

    const teamMember = fs.readFileSync("templates/intern.html");

    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');

    if (data.more==="yes") {
        roleQuestion();
    } else {
        const mainHTML = fs.readFileSync("templates/main.html");

        teamHTML = eval('`'+ mainHTML +'`');

        fs.writeFile("output/team.html", teamHTML, function(err) {

            if (err) {
                return console.log(err);
            } {

            console.log("success");
        }
      });
    }
})
};

//engineer questions
function engineerQuestions() {
    return inquirer.prompt([
    
        {
            type: "input",
            message: "Hi engineer! What is your name?",
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

    //creating new engineer object
    const engineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);

    const teamMember = fs.readFileSync("templates/engineer.html");

    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');


    if (engineer.more==="yes") {
        roleQuestion();
    } else {
        const mainHTML = fs.readFileSync("templates/main.html");

        teamHTML = eval('`'+ mainHTML +'`');

        fs.writeFile("output/team.html", teamHTML, function(err) {

            if (err) {
                return console.log(err);
            } {

            console.log("success");
        }
      });
  };

    });
};


mngrQuestions()