
//base constructor for Employee class
function Employee(name, id, email) {
    this.name = name,
    this.id = id,
    this.email = email,

    this.getName = function() {
        return name;
    };

    this.getId = function() {
        return id;
    }

    this.getEmail = function() {
        return email;
    }

    this.getRole = function() {
        return 'Employee';
    }

    };

  module.exports = Employee;  