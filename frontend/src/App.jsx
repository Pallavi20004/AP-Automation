import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InvoiceList from "./pages/InvoiceList";
import AddInvoice from "./pages/AddInvoice";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2 bg-dark text-white min-vh-100 p-3">
            <h3>AP Automation</h3>
            <hr />

            <Link to="/" className="d-block text-white mb-3">
              📊 Dashboard
            </Link>

            <Link to="/invoices" className="d-block text-white mb-3">
              📄 Invoices
            </Link>

            <Link to="/add" className="d-block text-white mb-3">
              ➕ Add Invoice
            </Link>

            <Link to="/reports" className="d-block text-white">
              📈 Reports
            </Link>
          </div>

          <div className="col-md-10 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/invoices" element={<InvoiceList />} />
              <Route path="/add" element={<AddInvoice />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;