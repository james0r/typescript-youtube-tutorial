class Person {
  constructor(public firstName: string, public lastName: string) {

  }
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  walk() {
    console.log('Walking')
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest() {
    console.log('Taking a test.')
  }
}

class Teacher extends Person {
  
  override get fullName() {
    return 'Professor ' + super.fullName
  }
}

let teacher = new Teacher('John', 'Doe')

class Principal extends Person {
  override get fullName() {
    return 'Principal ' + super.fullName
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName)
  }
}

// Open Closed Principle
// Def: Classes should be open for extension and closed for modification
// https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle

// Polymorphism in action
printNames([
  new Student(1, 'Bob', 'Jenkins'),
  new Teacher('Tom', 'Hatheford'),
  new Principal('Susan', 'Summers')
])
