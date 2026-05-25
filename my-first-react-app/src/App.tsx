// React Router v6 — Client-Side Routing
// Install: npm install react-router-dom
// Demonstrates BrowserRouter, Routes, Route, NavLink, useParams, Outlet

import { BrowserRouter, Routes, Route, NavLink, useParams, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import type { CSSProperties } from "react";

// ============================================================
// REACT ROUTER COMPONENTS:
//   BrowserRouter — wraps the app, provides routing context
//   Routes       — container for Route declarations
//   Route        — maps a URL path to a component
//   NavLink      — like Link, but adds active styling
//   Outlet       — renders nested child routes
//   useParams    — reads dynamic URL parameters
//   useNavigate  — programmatic navigation
// ============================================================

// Mock data
interface AccountData {
  id: string;
  name: string;
  balance: number;
  owner: string;
}

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const accounts: AccountData[] = [
  { id: "acc-001", name: "Savings Account",    balance: 150000, owner: "Alice" },
  { id: "acc-002", name: "Checking Account",   balance: 85000,  owner: "Alice" },
  { id: "acc-003", name: "Investment Account", balance: 320000, owner: "Alice" },
];

const stocks: StockData[] = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2850, change: 1.2 },
  { symbol: "INFY",     name: "Infosys Ltd.",         price: 1450, change: -0.8 },
  { symbol: "TCS",      name: "Tata Consultancy",     price: 3920, change: 0.5 },
];

// Shared layout with navigation
function Layout(): JSX.Element {
  const navLinkStyle = ({ isActive }: { isActive: boolean }): CSSProperties => ({
    padding: "8px 16px",
    textDecoration: "none",
    color: isActive ? "white" : "#94a3b8",
    background: isActive ? "#4f46e5" : "transparent",
    borderRadius: 4,
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div style={{ minHeight: "100vh", fontFamily: "sans-serif" }}>
      <nav
        style={{
          background: "#1a1a2e",
          padding: "12px 24px",
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <span style={{ color: "white", fontWeight: "bold", marginRight: 16 }}>FinanceApp</span>
        <NavLink to="/"          style={navLinkStyle} end>Dashboard</NavLink>
        <NavLink to="/accounts"  style={navLinkStyle}>Accounts</NavLink>
        <NavLink to="/portfolio" style={navLinkStyle}>Portfolio</NavLink>
        <NavLink to="/transfer"  style={navLinkStyle}>Transfer</NavLink>
      </nav>

      <main style={{ padding: 24 }}>
        <Outlet /> {/* renders the matched child route */}
      </main>
    </div>
  );
}

// Home / Dashboard
function Dashboard(): JSX.Element {
  const navigate = useNavigate();
  const totalBalance = accounts.reduce((s, a) => s + a.balance, 0);

  return (
    <div>
      <h1>Banking Dashboard</h1>
      <div
        style={{
          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
          color: "white",
          padding: 24,
          borderRadius: 12,
          marginBottom: 24,
        }}
      >
        <p style={{ opacity: 0.8 }}>Total Portfolio Value</p>
        <h2 style={{ fontSize: 36, margin: 0 }}>₹{totalBalance.toLocaleString()}</h2>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => navigate("/accounts")}  style={btn("blue")}>View Accounts</button>
        <button onClick={() => navigate("/transfer")}  style={btn("green")}>Transfer Funds</button>
        <button onClick={() => navigate("/portfolio")} style={btn("purple")}>Portfolio</button>
      </div>
    </div>
  );
}

// Accounts list page
function Accounts(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Accounts</h1>
      <div style={{ display: "grid", gap: 12 }}>
        {accounts.map((acc) => (
          <div
            key={acc.id}
            onClick={() => navigate(`/accounts/${acc.id}`)} // programmatic navigation
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: 20,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{acc.name}</h3>
              <p style={{ color: "#888", margin: "4px 0 0", fontSize: 13 }}>ID: {acc.id}</p>
            </div>
            <span style={{ fontSize: 22, fontWeight: "bold", color: "#4f46e5" }}>
              ₹{acc.balance.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Account detail — uses useParams to read :accountId
function AccountDetail(): JSX.Element {
  const { accountId } = useParams<{ accountId: string }>(); // reads dynamic URL segment
  const account = accounts.find((a) => a.id === accountId);
  const navigate = useNavigate();

  if (!account) {
    return (
      <div>
        <h2>Account not found</h2>
        <button onClick={() => navigate("/accounts")} style={btn("blue")}>← Back</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ ...btn("gray"), marginBottom: 16 }}>← Back</button>
      <h1>{account.name}</h1>
      <p>Account ID: {account.id}</p>
      <p>Owner: {account.owner}</p>
      <p style={{ fontSize: 28, fontWeight: "bold", color: "#4f46e5" }}>
        ₹{account.balance.toLocaleString()}
      </p>
    </div>
  );
}

// Portfolio — stock list
function Portfolio(): JSX.Element {
  return (
    <div>
      <h1>Portfolio Overview</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f3f4f6" }}>
            <th style={th}>Symbol</th>
            <th style={th}>Name</th>
            <th style={th}>Price</th>
            <th style={th}>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((s) => (
            <tr key={s.symbol}>
              <td style={td}><strong>{s.symbol}</strong></td>
              <td style={td}>{s.name}</td>
              <td style={td}>₹{s.price.toLocaleString()}</td>
              <td style={{ ...td, color: s.change >= 0 ? "green" : "red" }}>
                {s.change >= 0 ? "+" : ""}{s.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Transfer page
function Transfer(): JSX.Element {
  const navigate = useNavigate();
  const [sent, setSent] = useState<boolean>(false);
  if (sent) return (
    <div style={{ textAlign: "center", padding: 48 }}>
      <h2>✅ Transfer Successful!</h2>
      <button onClick={() => navigate("/")} style={btn("blue")}>Return to Dashboard</button>
    </div>
  );
  return (
    <div>
      <h1>Transfer Funds</h1>
      <p style={{ color: "#888" }}>Transfer between accounts or to external accounts.</p>
      <button onClick={() => setSent(true)} style={btn("green")}>Simulate Transfer</button>
    </div>
  );
}

// 404 Not Found
function NotFound(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: 48 }}>
      <h1 style={{ fontSize: 64, color: "#e5e7eb" }}>404</h1>
      <h2>Page Not Found</h2>
      <button onClick={() => navigate("/")} style={btn("blue")}>Go Home</button>
    </div>
  );
}

const btn = (color: string): CSSProperties => ({
  padding: "8px 20px", borderRadius: 4, border: "none",
  background: color, color: "white", cursor: "pointer", fontWeight: "bold",
});
const th: CSSProperties = { padding: "10px 16px", textAlign: "left", fontWeight: "bold" };
const td: CSSProperties = { padding: "12px 16px", borderBottom: "1px solid #e5e7eb" };

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index                      element={<Dashboard />} />
          <Route path="accounts"            element={<Accounts />} />
          <Route path="accounts/:accountId" element={<AccountDetail />} /> {/* dynamic route */}
          <Route path="portfolio"           element={<Portfolio />} />
          <Route path="transfer"            element={<Transfer />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* catch-all 404 */}
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(<App />);

export default App;
