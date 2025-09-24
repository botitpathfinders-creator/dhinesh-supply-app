import React, { useState } from "react";
import "../styles/Deliveries.css";

function Deliveries() {
  const [deliveries, setDeliveries] = useState([
    { date: "2025-09-01", item: "Product X", quantity: 20, status: "Delivered" },
    { date: "2025-09-05", item: "Product Y", quantity: 15, status: "Pending" },
    { date: "2025-09-10", item: "Product Z", quantity: 30, status: "Delivered" },
  ]);

  const [form, setForm] = useState({
    date: "",
    item: "",
    quantity: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addDelivery = () => {
    if (form.date && form.item && form.quantity && form.status) {
      setDeliveries([...deliveries, form]);
      setForm({ date: "", item: "", quantity: "", status: "" });
    }
  };

  return (
    <div className="page-container">
      <h2>Deliveries</h2>
      <form>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="item"
          placeholder="Item"
          value={form.item}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={form.status}
          onChange={handleChange}
        />
        <button type="button" onClick={addDelivery}>
          Add Record
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((d, index) => (
            <tr key={index}>
              <td>{d.date}</td>
              <td>{d.item}</td>
              <td>{d.quantity}</td>
              <td>{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Deliveries;
