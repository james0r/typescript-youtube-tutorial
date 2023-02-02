interface Product {
  name: string
  price: number
}

class Store<T> {
  protected _objects: T[] = []

  add(obj: T): void {
    this._objects.push(obj)
  }

  // keyof T will produce a type union of types declared on Product
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value)
  }
}

let store = new Store<Product>()
store.add({ name: 'a', price: 1 })
store.find('name', 'a')
store.find('price', 1)