import { useEffect, useState } from "react";

function InvoiceList() {

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("invoices")) || [];

    setInvoices(data);
  }, []);

  return (
    <div className="card shadow">
      <div className="card-body">

        <h3>Invoice List</h3>

        <table className="table">

          <thead>
            <tr>
              <th>Vendor</th>
              <th>Invoice</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {invoices.map((item, index) => (
              <tr key={index}>
                <td>{item.vendor}</td>
                <td>{item.invoice}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default InvoiceList;