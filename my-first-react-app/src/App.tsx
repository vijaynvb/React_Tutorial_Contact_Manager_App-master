// useContext — Share State Without Prop Drilling
// Demonstrates createContext, Provider, and useContext across a banking app

import { createContext, useContext, useState } from "react";
import { createRoot } from "react-dom/client";
import type { CSSProperties, ReactNode } from "react";

// ============================================================
// CONTEXT PATTERN:
//   1. createContext(defaultValue) — creates the context object
//   2. <Context.Provider value={...}> — provides value to descendants
//   3. useContext(Context) — reads the value anywhere in the tree
// Use for: auth state, theme, locale, global user/account data
// ============================================================

interface AccountData {
  owner: string;
  balance: number;
  type: string;
  accountNo: string;
}

interface StockData {
  displayName: string;
  ticker: string;
  price: number;
}

interface AccountContextValue {
  account: AccountData;
  isLoggedIn: boolean;
  updateBalance: (amount: number) => void;
  logout: () => void;
  login: () => void;
}

interface StockContextValue {
  stock: StockData;
}

// Create context with a meaningful default
const AccountContext = createContext<AccountContextValue | null>(null);
const StockContext = createContext<StockContextValue | null>(null);

interface AccountProviderProps {
  children: ReactNode;
}

interface StockProviderProps {
  children: ReactNode;
}

// Context Provider — holds and exposes the shared state
function AccountProvider({ children }: AccountProviderProps): JSX.Element {
  const [account, setAccount] = useState<AccountData>({
    owner: "Alice",
    balance: 150000,
    type: "Premium",
    accountNo: "XXXX-XXXX-1234",
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const updateBalance = (amount: number) =>
    setAccount((prev) => ({ ...prev, balance: Math.max(0, prev.balance + amount) }));

  const logout = () => setIsLoggedIn(false);
  const login  = () => setIsLoggedIn(true);

  return (
    <AccountContext.Provider value={{ account, isLoggedIn, updateBalance, logout, login }}>
      {children}
    </AccountContext.Provider>
  );
}

function StockProvider({ children }: StockProviderProps): JSX.Element {
  const [stock, setStock] = useState<StockData>({
    displayName: "Apple Inc.",
    ticker: "AAPL",
    price: 150.25,
  });
  
  return (
    <StockContext.Provider value={{ stock }}>
      {children}
    </StockContext.Provider>
  );
}

// --- Deeply nested components — no prop drilling needed ---

// Header — reads account from context directly
function Header(): JSX.Element {
  const ctx = useContext(AccountContext);
  if (!ctx) return <></>;
  const { account, isLoggedIn, logout, login } = ctx;

  return (
    <header
      style={{
        background: "#1a1a2e",
        color: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>FinanceApp</h2>
      {isLoggedIn ? (
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span>👤 {account.owner} | {account.type}</span>
          <button
            onClick={logout}
            style={{ padding: "4px 12px", borderRadius: 4, border: "none", cursor: "pointer" }}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={login}
          style={{ padding: "4px 12px", borderRadius: 4, border: "none", background: "white", cursor: "pointer" }}
        >
          Login
        </button>
      )}
    </header>
  );
}

// Balance card — reads and updates balance from context
function BalanceCard(): JSX.Element {
  const ctx = useContext(AccountContext);
  const ctx1 = useContext(StockContext);
  if (!ctx) return <></>;
  const { account, isLoggedIn, updateBalance } = ctx;

  if (!ctx1) return <></>;
    const { stock } = ctx1;
  if (!isLoggedIn) {
    return (
      <div style={{ padding: 24, textAlign: "center", color: "#888" }}>
        Please log in to view your account.
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Account Balance</h2>
      <div
        style={{
          background: "#f0fff4",
          border: "1px solid #86efac",
          borderRadius: 8,
          padding: 24,
          marginBottom: 16,
        }}
      >
        <p>Account No: {account.accountNo}</p>
        <p style={{ fontSize: 32, fontWeight: "bold", color: "green" }}>
          ₹{account.balance.toLocaleString()}
        </p>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => updateBalance(10000)} style={btn("green")}>Deposit ₹10,000</button>
        <button onClick={() => updateBalance(-5000)}  style={btn("red")}>  Withdraw ₹5,000</button>
      </div>
    </div>
  );
}

// Sidebar — also reads from the same context
function Sidebar(): JSX.Element | null {
  const ctx = useContext(AccountContext);
  if (!ctx) return null;
  const { account, isLoggedIn } = ctx;
  if (!isLoggedIn) return null;

  return (
    <aside
      style={{
        width: 200,
        background: "#f9fafb",
        padding: 16,
        borderRight: "1px solid #e5e7eb",
      }}
    >
      <h4>Account Info</h4>
      <p style={{ fontSize: 13 }}>Owner: {account.owner}</p>
      <p style={{ fontSize: 13 }}>Tier: {account.type}</p>
      <p style={{ fontSize: 13 }}>No: {account.accountNo}</p>
    </aside>
  );
}

// Root App — only AccountProvider needs to know about the shared state
function App(): JSX.Element {
  return (
    <AccountProvider>
      <div style={{ fontFamily: "sans-serif", minHeight: "100vh" }}>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ flex: 1 }}>
            <StockProvider>
              <BalanceCard />
            </StockProvider>
          </main>
        </div>
      </div>
    </AccountProvider>
  );
}

const btn = (color: string): CSSProperties => ({
  padding: "8px 16px", borderRadius: 4, border: "none",
  background: color, color: "white", cursor: "pointer", fontWeight: "bold",
});

createRoot(document.getElementById("root")!).render(<App />);

export default App;
