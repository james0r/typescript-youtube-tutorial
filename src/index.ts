// Creating classes

class Account {
  // The below properties only exist in TypeScript, not in Javascript.
  readonly id: number
  owner: string
  balance: number
  nickname?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this.balance = balance
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid amount')
    }

    this.balance += amount
  }
}

let account = new Account(1, 'Mosh', 0)
account.deposit(100)

// Because typeof will just return object we need to use instanceof to compare against class type
console.log(account instanceof Account)