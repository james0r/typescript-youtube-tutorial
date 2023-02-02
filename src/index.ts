// https://mywebsite.com/users
// https://mywebsite.com/products

// James's explanation:
// Generics allow us to "prop drill" types through in this case
// first a function invocation, through the function definition, through an interface type to a property
// type union. Crazy right? A take away is the flexibility and polymorphyism of this approach that
// allows us to dynamically change the shape of our fetch() return type without making changes to the actual
// function definition. Like "open for extension and closed for modification" from the polymorphyism section.

interface Result<T> {
  data: T | null,
  error: string | null
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null }
}

interface User {
  username: string
}

interface Product {
  title: string
}

let result = fetch<User>('url')
result.data