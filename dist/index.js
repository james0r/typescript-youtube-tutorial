"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    walk() {
        console.log('A student walking.');
    }
    takeTest() {
        this.walk();
        console.log('Taking a test.');
    }
}
let student = new Student(1, 'James', 'Auble');
student.takeTest();
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('John', 'Doe');
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
//# sourceMappingURL=index.js.map