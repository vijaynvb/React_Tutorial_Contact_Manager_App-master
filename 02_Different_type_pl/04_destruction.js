const baseAccount = {
  owner: "Alice",
  type: "savings",
  currency: "INR"
};

const accountDetails = {
  balance: 150000,
  interestRate: 4.5,
  currency: "USD" // overrides baseAccount.currency
};

const fullAccount = { ...baseAccount, ...accountDetails };
console.log(fullAccount);