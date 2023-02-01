// Abstract Classes and Methods

// Abstract classes are blueprints that cannot be instantiated and
// need to be extended before instantiating
abstract class Shape {
  constructor(public color: string) {

  }

  // Child classes must implement this member function (Think contract)
  abstract render(): void
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color)
  }

  override render(): void {
      console.log('Rendering a circle')
  }
}

let shape = new Circle(5, 'red')

shape.render()