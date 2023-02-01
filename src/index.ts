function render(document: unknown) {
  // Type unknown is better than type any because it requires that we type check member funcs & vars
  // Narrowing
  if (typeof document === 'string') {
    document.move()
    document.fly()
  }
}