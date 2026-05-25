// useReducer — Complex State Management
// Models a digital wallet with deposit, withdraw, and reset actions

import { useReducer, useState } from "react";
import { createRoot } from "react-dom/client";
import type { CSSProperties } from "react";

// ============================================================
// useReducer pattern:
//   1. Define initial state
//   2. Write a pure reducer(state, action) => newState
//   3. Dispatch actions from the component
// Use when: multiple related state values, complex transitions
// ============================================================

interface WalletTransaction {
  id: number;
  type: "credit" | "debit";
  amount: number;
  description: string;
  timestamp: string;
  balanceAfter?: number; // optional field to track balance after transaction
}

interface WalletState {
  balance: number;
  transactions: WalletTransaction[];
}

//typescript 
type WalletAction =
  | { type: "deposit";  payload: number; description?: string }
  | { type: "withdraw"; payload: number; description?: string }
  | { type: "reset" };

const initialState: WalletState = {
  balance: 50000,
  transactions: [],
};

// Pure reducer — takes current state and action, returns next state
function walletReducer(state: WalletState, action: WalletAction): WalletState {
  console.log("Action dispatched:", action); //{type: 'deposit', payload: 5000, description: 'Quick Deposit'}
  switch (action.type) {
    case "deposit":
      return {
        balance: state.balance + action.payload,
        transactions: [
          ...state.transactions,
          {
            id: Date.now(),
            type: "credit",
            amount: action.payload,
            description: action.description ?? "Deposit",
            timestamp: new Date().toLocaleTimeString(),
          },
        ],
      };

    case "withdraw":
      if (action.payload > state.balance) return state; // guard: insufficient funds
      return {
        balance: state.balance - action.payload,
        transactions: [
          ...state.transactions,
          {
            id: Date.now(),
            type: "debit",
            amount: action.payload,
            description: action.description ?? "Withdrawal",
            timestamp: new Date().toLocaleTimeString(),
          },
        ],
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function Wallet(): JSX.Element {
  const [state, dispatch] = useReducer(walletReducer, initialState);// operations, intialvalue [value and operations]
  const [customAmount, setCustomAmount] = useState<number>(0);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h1>Digital Wallet</h1>

      {/* Balance display */}
      <div
        style={{
          background: "#1a1a2e",
          color: "white",
          padding: 24,
          borderRadius: 12,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <p style={{ fontSize: 14, opacity: 0.7 }}>Available Balance</p>
        <p style={{ fontSize: 36, fontWeight: "bold" }}>
          ₹{state.balance.toLocaleString()}
        </p>
      </div>

      {/* Quick actions */}
      <h3>Quick Actions</h3>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {[5000, 10000, 25000].map((amount) => (
          <button
            key={amount}
            onClick={() => dispatch({ type: "deposit", payload: amount, description: `Quick Deposit` })} // react dispatch -> respective reducer with action type
            style={actionBtn("green")}
          >
            + ₹{amount.toLocaleString()}
          </button>
        ))}
        {[2000, 5000].map((amount) => (
          <button
            key={amount}
            onClick={() => dispatch({ type: "withdraw", payload: amount, description: `Quick Withdrawal` })}
            style={actionBtn("red")}
          >
            − ₹{amount.toLocaleString()}
          </button>
        ))}
        <button onClick={() => dispatch({ type: "reset" })} style={actionBtn("gray")}>
          Reset
        </button>
      </div>

      {/* Custom amount */}
      <h3>Custom Transaction</h3>
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(Number(e.target.value))}
          placeholder="Enter amount"
          style={{ flex: 1, padding: "8px 12px", borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button
          onClick={() => dispatch({ type: "deposit", payload: customAmount, description: "Custom Deposit" })}
          style={actionBtn("green")}
        >
          Deposit
        </button>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: customAmount, description: "Custom Withdrawal" })}
          style={actionBtn("red")}
        >
          Withdraw
        </button>
      </div>

      {/* Transaction history */}
      <h3>Transaction History ({state.transactions.length})</h3>
      {state.transactions.length === 0 ? (
        <p style={{ color: "#888" }}>No transactions yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[...state.transactions].reverse().map((t) => (
            <li
              key={t.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>{t.description}</span>
              <span style={{ fontSize: 12, color: "#888" }}>{t.timestamp}</span>
              <span style={{ color: t.type === "credit" ? "green" : "red", fontWeight: "bold" }}>
                {t.type === "credit" ? "+" : "−"}₹{t.amount.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const actionBtn = (color: string): CSSProperties => ({
  padding: "8px 16px",
  borderRadius: 4,
  border: "none",
  background: color,
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
});

createRoot(document.getElementById("root")!).render(<Wallet />);

export default Wallet;
