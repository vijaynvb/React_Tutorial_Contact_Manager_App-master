import { useState, type JSX } from "react";

function PortfolioValue(): JSX.Element {
  const [investedAmount, setInvestedAmount] = useState(100000);
  const [returns, setReturns] = useState(12000);


  return (
    <div>
      <p>Invested: ₹{investedAmount.toLocaleString()}</p>
      <p>Returns: ₹{returns.toLocaleString()}</p>
      <p>Total: ₹{(investedAmount + returns).toLocaleString()}</p>
      <button onClick={() => { return setReturns(r => r + 1000)}}>+₹1,000 Returns</button>
    </div>
  );
}

export default PortfolioValue;