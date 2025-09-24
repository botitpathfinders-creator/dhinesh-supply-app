import React from 'react';
import '../styles/Tables.css';
import { salesData, deliveriesData, inventoryData } from '../data';


function Reports() {
  return (
    <div className="table-container">
      <h2>📊 Reports Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Type</th>
            <th>Date</th>
            <th>Prepared By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R-2025-01</td>
            <td>Monthly Sales</td>
            <td>2025-09-01</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>R-2025-02</td>
            <td>Delivery Stats</td>
            <td>2025-09-10</td>
            <td>Logistics</td>
          </tr>
          <tr>
            <td>R-2025-03</td>
            <td>Inventory</td>
            <td>2025-09-15</td>
            <td>Warehouse</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
