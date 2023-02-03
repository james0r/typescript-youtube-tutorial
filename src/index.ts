// Type Mapping

interface Product {
  name: string
  price: number
}

type ReadOnlyProduct = {
  // Index signature
  // keyof
  readonly [Property in keyof Product]: Product[Property]
}

let product: ReadOnlyProduct = {
  name: 'a',
  price: 1
}

// ...and using Generics
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

let roProduct: ReadOnly<Product> = {
  name: 'a',
  price: 1
}

type Optional<T> = {
  [K in keyof T]?: T[K]
}

// No error here because properties are all optional
let opProduct: Optional<Product> = {
  name: 'a'
}

// The above examples are common and thus included in TypeScript referred to as Utility Types
// https://www.typescriptlang.org/docs/handbook/utility-types.html