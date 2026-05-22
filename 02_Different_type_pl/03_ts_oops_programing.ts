// ES6 Classes — Financial Domain
// Demonstrates class syntax, constructor, methods, and inheritance

class BankAccount {
  owner: string;
  balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  getSummary(): string {
    return `${this.owner} has ₹${this.balance.toLocaleString()} in their account.`;
  }

  deposit(amount: number): this {
    this.balance += amount;
    return this;
  }

  withdraw(amount: number): this {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return this;
    }
    this.balance -= amount;
    return this;
  }
}

// Class inheritance using extends and super()
class SavingsAccount extends BankAccount {
  interestRate: number;

  constructor(owner: string, balance: number, interestRate: number) {
    super(owner, balance); // calls BankAccount constructor
    this.interestRate = interestRate;
  }

  getInterestEarned(): string {
    return this.getSummary() + ` earning ${this.interestRate}% interest.`;
  }

  applyInterest(): number {
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
    return interest;
  }
}

// --- Usage ---
const account = new BankAccount("Alice", 10000);
console.log(account.owner);       // Alice
console.log(account.getSummary()); // Alice has ₹10,000 in their account.

account.deposit(5000).withdraw(2000);
console.log(account.getSummary()); // Alice has ₹13,000 in their account.

const savings = new SavingsAccount("Bob", 50000, 4.5);
console.log(savings.getInterestEarned());
// Bob has ₹50,000 in their account. earning 4.5% interest.

const interest = savings.applyInterest();
console.log(`Interest applied: ₹${interest.toLocaleString()}`); // ₹2,250
console.log(savings.getSummary()); // Bob has ₹52,250 in their account.
