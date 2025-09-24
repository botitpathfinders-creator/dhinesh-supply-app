import React, { useState } from "react";
import "../styles/Tables.css";
import ReusableForm from "../components/ReusableForm";
import { salesData } from "../data";

function Sales() {
  const [sales, setSales] = useState(salesData);

  const handleAddSale = (newSale) => {
    setSales([...sales, newSale]);
  };

  return (
    <div className="page-container">
      <h2>Sales</h2>

      <ReusableForm
        fields={[
          { name: "date", label: "Date", type: "date" },
          { name: "item", label: "Item", type: "text" },
          { name: "amount", label: "Amount ($)", type: "number" },
        ]}
        onSubmit={handleAddSale}
      />

      <table className="styled-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.date}</td>
              <td>{sale.item}</td>
              <td>{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;
