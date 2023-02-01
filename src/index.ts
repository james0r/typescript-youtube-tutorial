function reject(message: string): never {
  throw new Error(message)
}

reject('...')
console.log('something')

function processEvents(): never {
  while (true) {
    // Read a message from a queue
  }
}

processEvents()
console.log('something')