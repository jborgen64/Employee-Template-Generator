const Employee = require("../lib/Employee.js");

//modifying the employee constructor for engineer

function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email);
    this.github = github;

    this.getGithub = function() {
        return github;
    };

    this.getRole = function() {
        return 'Engineer';
    };
};

module.exports = Engineer;