import { useState } from "react";

function BankBalanceTracker() {
  const [balance, setBalance] = useState(50000);

  const deposit  = (amt: number) => setBalance(prev => prev + amt);
  const withdraw = (amt: number) => setBalance(prev => Math.max(0, prev - amt));

  return (
    <div>
      <h2>Account Balance: ₹{balance.toLocaleString()}</h2>
      <button onClick={() => deposit(5000)}>Deposit ₹5,000</button>
      <button onClick={() => withdraw(2000)}>Withdraw ₹2,000</button>
    </div>
  );
}

export default BankBalanceTracker;