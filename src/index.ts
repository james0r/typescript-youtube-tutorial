// Class Decorators

// Another way to achieve our decorator example using a base class
// class Component {
//   insertInDOM() {}
// }

// class ProfileComponent extends Component {

// }

// PascalCase
function Component(constructor: Function) {
  console.log('Component decorator called')
  constructor.prototype.uniqueId = Date.now()
  constructor.prototype.insertInDOM = () => {
    console.log('Inserting the component in the DOM')
  }
}

@Component
class ProfileComponent {
  constructor(name: string) {
    console.log(name)
  }
}

let profile = new ProfileComponent('James')