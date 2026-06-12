import { useState } from "react";

function AddInvoice() {

  const [vendor, setVendor] = useState("");
  const [invoice, setInvoice] = useState("");
  const [amount, setAmount] = useState("");

  const saveInvoice = () => {

    const invoices =
      JSON.parse(localStorage.getItem("invoices")) || [];

    invoices.push({
      vendor,
      invoice,
      amount,
      status: "Pending"
    });

    localStorage.setItem(
      "invoices",
      JSON.stringify(invoices)
    );

    alert("Invoice Saved Successfully!");

    setVendor("");
    setInvoice("");
    setAmount("");
  };

  return (
    <div className="card shadow">
      <div className="card-body">

        <h3>Add Invoice</h3>

        <input
          className="form-control mb-3"
          placeholder="Vendor Name"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Invoice Number"
          value={invoice}
          onChange={(e) => setInvoice(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={saveInvoice}
        >
          Save Invoice
        </button>

      </div>
    </div>
  );
}

export default AddInvoice;