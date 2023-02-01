"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
        this._balance += this._balance + this.calculateTax();
    }
    calculateTax() {
        return this._balance * .091;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Mosh', 0);
account.deposit(100);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map