import { useRef } from "react";

function TransferForm() {
  const amountRef = useRef(null);

  const handleFocus = () => {
    alert(amountRef.current.value);
    amountRef.current.focus();
    amountRef.current.select(); // select existing text for quick edit
  };

  return (
    <div>
      <label>Transfer Amount (₹):</label>
      <p>{amountRef.current} </p>
      <input ref={amountRef} type="number" placeholder="Enter amount" />
      <button onClick={handleFocus}>Edit Amount</button>
    </div>
  );
}

export default TransferForm;