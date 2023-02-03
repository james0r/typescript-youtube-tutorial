// Method Decorators
// https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function
  descriptor.value = function (...args: any) {
    console.log('Before')
    original.call(this, ...args)
    console.log('After')
  }
}

class Person {
  @Log
  say(message: string) {
    console.log('Person says ' + message)
  }
}

let person = new Person()
person.say('Hello')