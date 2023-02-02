// Generic Constraints

class Person {
  constructor(name: string) {
    console.log(name)
  }
}

class Customer extends Person {

}

class Clerk {

}

// Our generic type is constained by objects that extend Person here.
function echo<T extends Person>(value: T): T {
  return value
}

// This doesn't work, because we don't know if type T is going to be a string or number.
// If a number is passed, then our return type of T is no longer valid.
function echoStringOrNumber<T extends string | number>(value: T): T {
  return 'string'
}

echo(new Customer('a'))

echoStringOrNumber(58)

// let ourNumber = echoStringOrNumber(58)

console.log(typeof ourNumber)