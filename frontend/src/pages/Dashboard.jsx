function Dashboard() {
  return (
    <>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5>Total Invoices</h5>
              <h1>25</h1>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5>Pending</h5>
              <h1>10</h1>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5>Approved</h5>
              <h1>15</h1>
            </div>
          </div>
        </div>

      </div>

      <br />
    </>
  );
}

export default Dashboard;