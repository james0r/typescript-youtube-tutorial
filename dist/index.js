"use strict";
class Person {
    constructor(name) {
        console.log(name);
    }
}
class Customer extends Person {
}
class Clerk {
}
function echo(value) {
    return value;
}
function echoStringOrNumber(value) {
    return value;
}
echo(new Customer('a'));
echoStringOrNumber(58);
let ourNumber = echoStringOrNumber(58);
console.log(typeof ourNumber);
//# sourceMappingURL=index.js.map