const Employee = require("../lib/Employee.js");

//modifying the employee constructor for manager

function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email);

    this.officeNumber = officeNumber;

    this.getRole = function(){
        return 'Manager';
    };

    this.getOfficeNumber = function(){
        return officeNumber;
    }
    console.log(this)
};

module.exports = Manager;