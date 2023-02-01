type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)

// if (customer !== null) {
//   console.log(customer.birthday)
// }

// Optional property access operator
// Returns null because there is no member property birthday of null
console.log(customer?.birthday?.getFullYear())

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null

log?.('a')