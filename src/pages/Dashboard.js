import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="page-container">
      <h2>Dashboard</h2>
      <p>Welcome to your supply chain dashboard!</p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Deliveries</h3>
          <p>65</p>
        </div>
        <div className="card">
          <h3>Total Sales</h3>
          <p>$8,450</p>
        </div>
        <div className="card">
          <h3>Low Stock Alerts</h3>
          <p>3 items</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
