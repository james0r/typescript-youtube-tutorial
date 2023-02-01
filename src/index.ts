// Creating classes

class Account {
  nickname?: string

  // Here we declare and initialize our variables as arguments for our constructor
  // These are called Parameter Properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
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

  private calculateTax(): number {
    return this._balance * .091
  }

  get balance(): number {
    return this._balance
  }
}

let account = new Account(1, 'Mosh', 0)
account.deposit(100)

console.log(account.balance)