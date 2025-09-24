import React, { useState } from "react";
import "../styles/Tables.css";
import ReusableForm from "../components/ReusableForm";
import { inventoryData } from "../data";

function Inventory() {
  const [inventory, setInventory] = useState(inventoryData);

  const handleAddInventory = (newItem) => {
    // Normalize keys in case ReusableForm returns them differently
    const formattedItem = {
      item: newItem.item || newItem.Item,
      category: newItem.category || newItem.Category,
      stock: newItem.stock || newItem.Stock,
      price: newItem.price || newItem.Price,
    };
    setInventory([...inventory, formattedItem]);
  };

  return (
    <div className="page-container">
      <h2>Inventory</h2>

      <ReusableForm
        fields={[
          { name: "item", label: "Item", type: "text" },
          { name: "category", label: "Category", type: "text" },
          { name: "stock", label: "Stock", type: "number" },
          { name: "price", label: "Price ($)", type: "number" },
        ]}
        onSubmit={handleAddInventory}
      />

      <table className="styled-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
