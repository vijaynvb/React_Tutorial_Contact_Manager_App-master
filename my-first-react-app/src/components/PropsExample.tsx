function AccountCard({ owner, accountType, balance }: { owner: string; accountType: string; balance: number }) {
  return (
    <div className="account-card">
      <h2>{owner}</h2>
      <p>Type: {accountType}</p>
      <p>Balance: ₹{balance.toLocaleString()}</p>
    </div>
  );
}

export default AccountCard;