// Functional Programming Version

// Factory function to create a bank account object
const createBankAccount = (owner, balance) => ({
  owner,
  balance,
});

// Pure function to get account summary
const getSummary = (account) =>
  `${account.owner} has ₹${account.balance.toLocaleString()} in their account.`;

// Pure function for deposit
const deposit = (account, amount) => ({
  ...account,
  balance: account.balance + amount,
});

// Pure function for withdraw
const withdraw = (account, amount) => {
  if (amount > account.balance) {
    console.log("Insufficient funds.");
    return account;
  }

  return {
    ...account,
    balance: account.balance - amount,
  };
};

// Factory function for savings account
const createSavingsAccount = (owner, balance, interestRate) => ({
  owner,
  balance,
  interestRate,
});

// Function to get interest information
const getInterestEarned = (account) =>
  `${getSummary(account)} earning ${account.interestRate}% interest.`;

// Function to apply interest
const applyInterest = (account) => {
  const interest = (account.balance * account.interestRate) / 100;

  return {
    updatedAccount: {
      ...account,
      balance: account.balance + interest,
    },
    interest,
  };
};

// --- Usage ---

let account = createBankAccount("Alice", 10000);

console.log(account.owner);
// Alice

console.log(getSummary(account));
// Alice has ₹10,000 in their account.

// Since objects are immutable, reassign updated object
account = deposit(account, 5000);
account = withdraw(account, 2000);

console.log(getSummary(account));
// Alice has ₹13,000 in their account.

let savings = createSavingsAccount("Bob", 50000, 4.5);

console.log(getInterestEarned(savings));
// Bob has ₹50,000 in their account. earning 4.5% interest.

const result = applyInterest(savings);

savings = result.updatedAccount;

console.log(
  `Interest applied: ₹${result.interest.toLocaleString()}`
);
// ₹2,250

console.log(getSummary(savings));
// Bob has ₹52,250 in their account.