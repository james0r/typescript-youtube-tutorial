// Creating classes

class Account {
  // The below properties only exist in TypeScript, not in Javascript.
  readonly id: number
  owner: string
  private _balance: number
  nickname?: string

  constructor(id: number, owner: string, _balance: number) {
    this.id = id
    this.owner = owner
    this._balance = _balance
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid amount')
    }
    // Record a transaction
    this._balance += amount
    this._balance += this._balance + this.calculateTax()
  }

  private calculateTax():number {
    return this._balance * .091
  }

  getBalance(): number {
    return this._balance
  }
}

let account = new Account(1, 'Mosh', 0)
account.deposit(100)

console.log(account.getBalance())