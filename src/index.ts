// Parameterized Decorators

type ComponentOptions ={
  selector: string
}

// Decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called')
    constructor.prototype.options = options
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM')
    }
  }
}

// function Component(constructor: Function) {
//   console.log('Component decorator called')
//   constructor.prototype.uniqueId = Date.now()
//   constructor.prototype.insertInDOM = () => {
//     console.log('Inserting the component in the DOM')
//   }
// }

@Component({ selector: '#my-profile' })
class ProfileComponent {
  constructor(name: string) {
    console.log(name)
  }
}

let profile = new ProfileComponent('James')