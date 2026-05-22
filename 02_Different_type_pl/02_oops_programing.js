// es6

// Basic class with constructor and method
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  getSummary() {
    return `${this.owner} has ₹${this.balance.toLocaleString()} in their account.`;
  }

  deposit(amount) {
    this.balance += amount;
    return this;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return this;
    }
    this.balance -= amount;
    return this;
  }
}

const account1 = new BankAccount("Alice", 5000);
console.log(account1.getSummary()); // Alice has ₹5,000 in their account.