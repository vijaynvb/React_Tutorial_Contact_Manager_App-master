

const transactions = [
  { id: 1, desc: "Salary Credit", amount: 50000 },
  { id: 2, desc: "Electricity Bill", amount: -1200 },
  { id: 3, desc: "Grocery", amount: -3500 },
];

function TransactionList(){
    return(
        
          <ul>
            {transactions.map(t => (
            <li key={t.id} style={{ color: t.amount > 0 ? "green" : "red" }}>
                {t.desc}: ₹{Math.abs(t.amount).toLocaleString()}
            </li>
            ))}
        </ul>
    );
}

export default TransactionList;