const Employee = require("../lib/Employee.js");

//modifying the employee constructor for intern

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school;

    this.getRole = function(){
        return 'Intern';
    };

    this.getSchool = function(){
        return school;
    }
};

module.exports = Intern;