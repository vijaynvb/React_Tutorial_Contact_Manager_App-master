import { useState, useEffect } from "react";

function StockPrice({ symbol }: { symbol: string }) {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch(`http://localhost:3001/stocks?symbol=${symbol}`)
      .then(res => res.json())
      .then(data => {
        if (!cancelled) {
          setPrice(data[0]?.price ?? null);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true; // cleanup: ignore stale response if symbol changes
    };
  }, [symbol]);
  
  if (loading) return <p>Loading {symbol} price...</p>;
  return <h2>{symbol}: ₹{price?.toLocaleString()}</h2>;
}
export default StockPrice;