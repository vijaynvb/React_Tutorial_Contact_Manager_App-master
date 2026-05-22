// ES6 Classes — Financial Domain
// Demonstrates class syntax, constructor, methods, and inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    BankAccount.prototype.getSummary = function () {
        return this.owner + " has \u20B9" + this.balance.toLocaleString() + " in their account.";
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        return this;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return this;
        }
        this.balance -= amount;
        return this;
    };
    return BankAccount;
}());
// Class inheritance using extends and super()
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(owner, balance, interestRate) {
        var _this = _super.call(this, owner, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.getInterestEarned = function () {
        return this.getSummary() + (" earning " + this.interestRate + "% interest.");
    };
    SavingsAccount.prototype.applyInterest = function () {
        var interest = (this.balance * this.interestRate) / 100;
        this.balance += interest;
        return interest;
    };
    return SavingsAccount;
}(BankAccount));
// --- Usage ---
var account = new BankAccount("Alice", 10000);
console.log(account.owner); // Alice
console.log(account.getSummary()); // Alice has ₹10,000 in their account.
account.deposit(5000).withdraw(2000);
console.log(account.getSummary()); // Alice has ₹13,000 in their account.
var savings = new SavingsAccount("Bob", 50000, 4.5);
console.log(savings.getInterestEarned());
// Bob has ₹50,000 in their account. earning 4.5% interest.
var interest = savings.applyInterest();
console.log("Interest applied: \u20B9" + interest.toLocaleString()); // ₹2,250
console.log(savings.getSummary()); // Bob has ₹52,250 in their account.
