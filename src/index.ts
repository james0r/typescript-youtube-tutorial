// Protected and Private modifiers.
// Note: Only use protected if you know what you're doing.
// Most often you should be using prviate and public

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
    this.walk()
    console.log('Taking a test.')
  }
}

let student = new Student(1, 'James', 'Auble')
student.takeTest()

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


